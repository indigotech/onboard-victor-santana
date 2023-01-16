import {useQuery} from '@apollo/client';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  Text,
} from 'react-native';
import {usersQuery} from '../utils/apollo';
import {UserNode} from '../utils/models';
import {UserItem} from './user-item';

export const UsersList = () => {
  const {data, loading} = useQuery(usersQuery, {
    variables: {data: {limit: null, offset: null}},
  });

  console.log(data);
  console.log(loading);

  return (
    <SafeAreaView>
      <Text>Lista de Usuarios: </Text>
      {!loading ? (
        <FlatList
          keyExtractor={item => item.name}
          data={data.users.nodes}
          renderItem={({item}: ListRenderItemInfo<UserNode>) => (
            <UserItem {...item} />
          )}
        />
      ) : (
        <ActivityIndicator />
      )}
    </SafeAreaView>
  );
};
