/**
 * @format
 */

import App from './App';
import {registerScreens} from './src/utils/navigation';
import {Navigation} from 'react-native-navigation';

registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Login',
            },
          },
        ],
      },
    },
  });
});
