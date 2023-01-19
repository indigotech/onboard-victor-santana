import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {Navigation} from 'react-native-navigation';
import {AddUserScreen} from '../add-user/add-user-screen';
import {HomeScreen} from '../home/home';
import {LoginScreen} from '../signin/Signin';
import {client} from './apollo';
import {UserDetailScreen} from '../user-details/user-details-screen';

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
  Navigation.registerComponent(
    'UserDetails',
    () => props =>
      (
        <ApolloProvider client={client}>
          <UserDetailScreen {...props} />
        </ApolloProvider>
      ),
    () => UserDetailScreen,
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

export const goToUserDetailScreen = (userId: string) => {
  Navigation.push('Component4', {
    component: {
      name: 'UserDetails',
      passProps: {userId},
    },
  });
};

export const goBack = (id: string) => {
  Navigation.pop(id);
};
