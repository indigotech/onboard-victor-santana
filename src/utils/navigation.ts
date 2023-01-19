import {Navigation} from 'react-native-navigation';
import {AddUserScreen} from '../add-user/add-user';
import {HomeScreen} from '../home/home';
import {LoginScreen} from '../signin/Signin';

export const registerScreens = () => {
  Navigation.registerComponent('Login', () => LoginScreen);
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
  Navigation.registerComponent('AddUserScreen', () => AddUserScreen);
};

export const goToHome = (id: string) => {
  Navigation.push(id, {
    component: {
      name: 'HomeScreen',
    },
  });
};

export const goToAddUser = (id: string) => {
  Navigation.push(id, {
    component: {
      name: 'AddUserScreen',
    },
  });
};
