import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {AddUser} from '../components/add-user';
import {client} from '../utils/apollo';
import {AddUserProps} from '../utils/models';

export const AddUserScreen = (props: AddUserProps) => {
  return (
    <ApolloProvider client={client}>
      <AddUser componentId={props.componentId} onSuccess={props.onSuccess} />
    </ApolloProvider>
  );
};
