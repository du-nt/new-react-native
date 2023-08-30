import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import tw from 'twrnc';
import {AuthStacksProps} from 'types';

export default function Register({navigation}: AuthStacksProps) {
  return (
    <View>
      <Text variant="displayLarge" style={tw`text-blue-500 mt-30`}>
        Register
      </Text>
      <Button mode="outlined" icon="camera" onPress={() => navigation.goBack()}>
        Go back to Login
      </Button>
    </View>
  );
}
