import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from 'screens/auths/Login';
import Register from 'screens/auths/Register';
import {AuthStacksParamList} from 'types';

const Stack = createNativeStackNavigator<AuthStacksParamList>();

export default function AuthStacks() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
