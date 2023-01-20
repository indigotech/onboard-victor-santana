import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {Navigation} from 'react-native-navigation';
import {AddUserScreen} from '../add-user/add-user-screen';
import {HomeScreen} from '../home/home';
import {LoginScreen} from '../signin/Signin';
import {client} from './apollo';

export const registerScreens = () => {
  Navigation.registerComponent(
    'Login',
    () => props =>
      (
        <ApolloProvider client={client}>
          <LoginScreen {...props} />
        </ApolloProvider>
      ),
    () => LoginScreen,
  );
  Navigation.registerComponent(
    'Home',
    () => props =>
      (
        <ApolloProvider client={client}>
          <HomeScreen {...props} />
        </ApolloProvider>
      ),
    () => HomeScreen,
  );
  Navigation.registerComponent(
    'AddUser',
    () => props =>
      (
        <ApolloProvider client={client}>
          <AddUserScreen {...props} />
        </ApolloProvider>
      ),
    () => AddUserScreen,
  );
};

export const goToHome = (id: string) => {
  Navigation.push(id, {
    component: {
      name: 'Home',
    },
  });
};

export const goToAddUser = (id: string, onSuccess: () => void) => {
  Navigation.push(id, {
    component: {
      name: 'AddUser',
      passProps: {onSuccess},
    },
  });
};

export const goBack = (id: string) => {
  Navigation.pop(id);
};
