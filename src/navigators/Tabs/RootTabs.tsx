import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Setting from 'screens/tabs/Setting';
import User from 'screens/tabs/User';
import {IconProps} from 'types';

const Tab = createBottomTabNavigator();

export default function RootTabs() {
  const {t} = useTranslation();

  const userTabIcon = ({color, size}: IconProps) => (
    <Icon name="account-circle" color={color} size={size} />
  );

  const settingTabIcon = ({color, size}: IconProps) => (
    <Icon name="cog-outline" color={color} size={size} />
  );

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: userTabIcon,
          tabBarBadge: 3,
          tabBarLabel: t('navigator:user'),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: settingTabIcon,
          tabBarLabel: t('navigator:settings'),
        }}
      />
    </Tab.Navigator>
  );
}
