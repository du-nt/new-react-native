/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from 'App';
import {RecoilRoot} from 'recoil';
import Service from 'services';
import {SWRConfig} from 'swr';

import 'locales/i18n';

import {name as appName} from './app.json';

function Main() {
  return (
    <RecoilRoot>
      <SWRConfig
        value={{
          fetcher: ({url, params}) => Service.get(url, params),
          provider: () => new Map(),
          isOnline() {
            /* Customize the network state detector */
            return true;
          },
          isVisible() {
            /* Customize the visibility state detector */
            return true;
          },
          initFocus() {
            /* Register the listener with your state provider */
          },
          initReconnect() {
            /* Register the listener with your state provider */
          },
        }}>
        <App />
      </SWRConfig>
    </RecoilRoot>
  );
}

AppRegistry.registerComponent(appName, () => Main);
