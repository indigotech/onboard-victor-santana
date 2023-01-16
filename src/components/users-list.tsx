import {useQuery} from '@apollo/client';
import React, {useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, Text} from 'react-native';
import {usersQuery} from '../utils/apollo';
import {UserNode} from '../utils/models';
import {Loading, renderItem} from './list-functions';

const limit = 15;

export const UsersList = () => {
  const [offset, setOffset] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [list, setList] = useState<UserNode[]>([]);
  const {refetch, loading} = useQuery(usersQuery, {
    variables: {data: {limit: limit, offset: 0}},
    onCompleted: data => {
      setList(prev => [...prev, ...data.users.nodes]);
      setHasMoreData(data.users.pageInfo.hasNextPage);
      setOffset(data.users.pageInfo.offset);
    },
  });

  const moreUsers = () => {
    if (!hasMoreData) {
      return;
    }

    refetch({
      data: {
        limit: limit,
        offset: limit + offset,
      },
    });
  };

  return (
    <SafeAreaView>
      <Text>Lista de Usuarios: </Text>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderItem}
          ListFooterComponent={<Loading loading={hasMoreData} />}
          onEndReachedThreshold={0.3}
          onEndReached={moreUsers}
        />
      )}
    </SafeAreaView>
  );
};
