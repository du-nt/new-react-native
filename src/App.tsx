import {useColorScheme} from 'react-native';
import {
  adaptNavigationTheme,
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  DarkTheme as NavDarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import useAuth from 'hooks/useAuth';
import RootDrawers from 'navigators/Drawers/RootDrawers';
import AuthStacks from 'navigators/Stacks/AuthStacks';
import tw from 'twrnc';

export default function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const {DarkTheme, LightTheme} = adaptNavigationTheme({
    reactNavigationDark: NavDarkTheme,
    reactNavigationLight: DefaultTheme,
  });

  const {profile} = useAuth();

  return (
    <PaperProvider theme={isDarkMode ? MD3DarkTheme : MD3LightTheme}>
      <SafeAreaView style={tw`bg-red-500 flex-1`} edges={['top']}>
        <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
          {profile ? <RootDrawers /> : <AuthStacks />}
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}
