import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootStacks from 'navigators/Stacks/RootStacks';
import Article from 'screens/drawers/Article';
import Feed from 'screens/drawers/Feed';
import {IconProps} from 'types';

const Drawer = createDrawerNavigator();

export default function RootDrawers() {
  const homeDrawerIcon = ({color, size}: IconProps) => (
    <Icon name="home-outline" color={color} size={size} />
  );

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Home"
        component={RootStacks}
        options={{
          drawerIcon: homeDrawerIcon,
        }}
      />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}
