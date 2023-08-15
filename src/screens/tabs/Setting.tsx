import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import useAuth from 'hooks/useAuth';

export default function Setting() {
  const {t} = useTranslation();
  const {logout} = useAuth({revalidateOnMount: false});

  return (
    <View>
      <Text>{t('common:hello')}</Text>
      <Button mode="outlined" onPress={logout}>
        Logout
      </Button>
    </View>
  );
}
