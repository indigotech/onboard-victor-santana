import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {NavigationComponentProps} from 'react-native-navigation';
import {AddUserFAB} from '../components/add-user-fab';
import {UsersList} from '../components/users-list';
import {client} from '../utils/apollo';
import {goToAddUser} from '../utils/navigation';

export const HomeScreen: React.FC<NavigationComponentProps> = props => {
  const handleAddUserFABTap = () => {
    goToAddUser(props.componentId);
  };

  return (
    <ApolloProvider client={client}>
      <UsersList />
      <AddUserFAB onTap={handleAddUserFABTap} />
    </ApolloProvider>
  );
};
