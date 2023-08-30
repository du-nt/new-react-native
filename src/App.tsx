import {useColorScheme} from 'react-native';
import {
  adaptNavigationTheme,
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';
import {
  DarkTheme as NavDarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import useAuth from 'hooks/useAuth';
import RootDrawers from 'navigators/drawers/RootDrawers';
import AuthStacks from 'navigators/stacks/AuthStacks';

export default function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const {DarkTheme, LightTheme} = adaptNavigationTheme({
    reactNavigationDark: NavDarkTheme,
    reactNavigationLight: DefaultTheme,
  });

  const {profile} = useAuth({revalidateOnMount: true});

  return (
    <PaperProvider theme={isDarkMode ? MD3DarkTheme : MD3LightTheme}>
      <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
        {profile ? <RootDrawers /> : <AuthStacks />}
      </NavigationContainer>
    </PaperProvider>
  );
}
