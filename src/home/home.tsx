import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {NavigationComponentProps} from 'react-native-navigation';
import {AddUserButton} from '../components/fab';
import {UsersList} from '../components/users-list';
import {client} from '../utils/apollo';

export const HomeScreen = (props: NavigationComponentProps) => {
  return (
    <ApolloProvider client={client}>
      <UsersList />
      <AddUserButton componentId={props.componentId} />
    </ApolloProvider>
  );
};
