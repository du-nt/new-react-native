import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootTabs from 'navigators/Tabs/RootTabs';
import Favorite from 'screens/stacks/Favorite';
import Library from 'screens/stacks/Library';

const Stack = createNativeStackNavigator();

export default function RootStacks() {
  return (
    <Stack.Navigator initialRouteName="RootTabs">
      <Stack.Screen
        name="RootTabs"
        component={RootTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Library" component={Library} />
    </Stack.Navigator>
  );
}
