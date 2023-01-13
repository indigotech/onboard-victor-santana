import {useQuery} from '@apollo/client';
import React from 'react';
import {FlatList, ListRenderItemInfo, SafeAreaView, Text} from 'react-native';
import {usersQuery} from '../utils/apollo';
import {UserNode} from '../utils/models';
import {UserItem} from './user-item';

export const UsersList = () => {
  const {data} = useQuery(usersQuery, {
    variables: {data: {limit: null, offset: null}},
  });

  const users: UserNode[] = data.users.nodes;

  return (
    <SafeAreaView>
      <Text>Lista de Usuarios: </Text>
      <FlatList
        keyExtractor={item => item.name}
        data={users}
        renderItem={({item}: ListRenderItemInfo<UserNode>) => (
          <UserItem {...item} />
        )}
      />
    </SafeAreaView>
  );
};
