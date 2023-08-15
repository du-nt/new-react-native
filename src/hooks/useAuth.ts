import {useCallback, useEffect, useRef, useState} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import Service from 'services';
import {clearTokens, getTokens, storeTokens} from 'services/authAxios';
import useSWR from 'swr';
import {PublicConfiguration} from 'swr/_internal';
import {CurrentUser} from 'types';

export default function useAuth(
  options?: Partial<PublicConfiguration<CurrentUser | null, any, any>>,
) {
  const isSubmittingRef = useRef<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {
    data: profile,
    mutate,
    error,
    isValidating,
  } = useSWR<CurrentUser | null>(
    {url: 'posts/1'},
    {
      dedupingInterval: 60 * 60 * 1000, // 1hr
      ...options,
    },
  );

  const firstLoading = profile === undefined && error === undefined;

  const login = useCallback(
    async (values: any) => {
      try {
        if (!isSubmittingRef.current && !isSubmitting) {
          isSubmittingRef.current = true;
          setIsSubmitting(true);

          const response = await Service.post('v1/auth/login', values);
          await storeTokens(response.data);
          await mutate();

          setIsSubmitting(false);
          isSubmittingRef.current = false;
        }
      } catch (err) {
        setIsSubmitting(false);
        isSubmittingRef.current = false;
      }
    },
    [mutate, isSubmitting],
  );

  const logout = useCallback(async () => {
    try {
      const refreshToken = await getTokens();
      Service.post('v1/auth/logout', {
        refreshToken,
      });
    } catch (err) {
      // Handle error if necessary
    } finally {
      mutate(null, false);
      clearTokens();
    }
  }, [mutate]);

  useEffect(() => {
    const initialize = async () => {
      if (!firstLoading) {
        await RNBootSplash.hide({fade: true, duration: 500});
      }
    };

    initialize();
  }, [firstLoading]);

  return {
    profile,
    mutate,
    login,
    logout,
    firstLoading,
    isValidating,
    isSubmitting,
  };
}
