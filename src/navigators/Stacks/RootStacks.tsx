import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootTabs from 'navigators/tabs/RootTabs';
import Favorite from 'screens/stacks/Favorite';
import Library from 'screens/stacks/Library';

const Stack = createNativeStackNavigator();

export default function RootStacks() {
  return (
    <Stack.Navigator
      initialRouteName="RootTabs"
      screenOptions={{
        headerShown: false,
        navigationBarColor: '#0000',
        statusBarColor: '#0000',
      }}>
      <Stack.Screen name="RootTabs" component={RootTabs} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Library" component={Library} />
    </Stack.Navigator>
  );
}
