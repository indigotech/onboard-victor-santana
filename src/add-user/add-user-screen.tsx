<<<<<<< HEAD
import React from 'react';
import {AddUser} from '../components/add-user';
=======
import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {AddUser} from '../components/add-user';
import {client} from '../utils/apollo';
>>>>>>> c75485a (feat: adding add user server integration)
import {AddUserProps} from '../utils/models';

export const AddUserScreen = (props: AddUserProps) => {
  return (
<<<<<<< HEAD
    <AddUser componentId={props.componentId} onSuccess={props.onSuccess} />
=======
    <ApolloProvider client={client}>
      <AddUser componentId={props.componentId} onSuccess={props.onSuccess} />
    </ApolloProvider>
>>>>>>> c75485a (feat: adding add user server integration)
  );
};
