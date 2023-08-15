import EncryptedStorage from 'react-native-encrypted-storage';
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import {TokenBundle} from 'types';

// export const apiDomain = process.env.REACT_APP_API_URL;
export const apiDomain = 'https://jsonplaceholder.typicode.com/';

export const storeTokens = async (tokenBundle: TokenBundle) => {
  await Promise.all([
    EncryptedStorage.setItem('idToken', tokenBundle.idToken),
    EncryptedStorage.setItem('refreshToken', tokenBundle.refreshToken),
  ]);
};

export const getTokens = async () => {
  const [refreshToken, idToken] = await Promise.all([
    EncryptedStorage.getItem('idToken'),
    EncryptedStorage.getItem('refreshToken'),
  ]);

  return {refreshToken, idToken};
};

export const clearTokens = async () => {
  await Promise.all([
    EncryptedStorage.removeItem('idToken'),
    EncryptedStorage.removeItem('refreshToken'),
  ]);
};

let refreshTokenRequest: null | Promise<any> = null;

const instance = axios.create({
  baseURL: apiDomain,
  headers: {
    'Content-Type': 'application/json',
  },
});

const refresh = async () => {
  try {
    const {refreshToken} = await getTokens();

    const response = await axios.post(`${apiDomain}v1/auth/token/refresh`, {
      refreshToken,
    });
    await storeTokens(response.data.data);
    refreshTokenRequest = null;

    return response.data.idToken;
  } catch (error: any) {
    refreshTokenRequest = null;
    clearTokens();

    // TODO: BE need to change to 401
    if (error?.response?.status === 400) {
      // emit.emit(Const.UNAUTHORIZED_ERROR);
    }

    return Promise.reject(error);
  }
};

const onRequest = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig<any>> => {
  const {idToken} = await getTokens();

  if (config.headers) {
    config.headers.Authorization = `Bearer ${idToken}`;
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError): Promise<any> => {
  if (error.response && error.response.status === 401 && error.config) {
    refreshTokenRequest = refreshTokenRequest || refresh();

    const newIdToken = await refreshTokenRequest;

    error.config.headers = {
      ...(error.config.headers as any),
      authorization: `Bearer ${newIdToken}`,
    };

    refreshTokenRequest = null;

    return instance(error.config);
  }
  return Promise.reject(error);
};

instance.interceptors.request.use(onRequest, onRequestError);
instance.interceptors.response.use(onResponse, onResponseError);

export default instance;
