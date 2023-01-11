import {Navigation} from 'react-native-navigation';
import {HomeScreen} from '../home/home';
import {LoginScreen} from '../signin/Signin';

export const registerScreens = () => {
  Navigation.registerComponent('Login', () => LoginScreen);
  Navigation.registerComponent('Home', () => HomeScreen);
};

export const goToHome = (id: string) => {
  Navigation.push(id, {
    component: {
      name: 'Home',
    },
  });
};
