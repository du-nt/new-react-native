import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import useAuth from 'hooks/useAuth';
import tw from 'twrnc';
import {AuthStacksProps} from 'types';

export default function Login({navigation}: AuthStacksProps) {
  const {login} = useAuth();

  return (
    <View>
      <Text variant="displayLarge" style={tw`text-blue-500 mt-30`}>
        Login
      </Text>
      <Button mode="outlined" onPress={() => navigation.navigate('Register')}>
        Go to Register
      </Button>

      <Button mode="outlined" onPress={login}>
        Login
      </Button>
    </View>
  );
}
