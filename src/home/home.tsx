import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {UsersList} from '../components/users-list';
import {client} from '../utils/apollo';

export const HomeScreen = () => {
  return (
    <ApolloProvider client={client}>
      <UsersList />
    </ApolloProvider>
  );
};
