import {useQuery} from '@apollo/client';
import React, {useRef, useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, Text} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import {usersQuery} from '../utils/apollo';
import {UserNode} from '../utils/models';
import {Loading, renderItem} from './list-functions';

const LIMIT = 15;

export const UsersList = (props: NavigationComponentProps) => {
  const offset = useRef(0);
  const hasMoreData = useRef(true);
  const [users, setUsers] = useState<UserNode[]>([]);
  const {refetch, loading} = useQuery(usersQuery, {
    variables: {data: {limit: LIMIT, offset: 0}},
    onCompleted: data => {
      setUsers(prev => [...prev, ...data.users.nodes]);
      hasMoreData.current = data.users.pageInfo.hasNextPage;
      offset.current = data.users.pageInfo.offset;
    },
  });

  const moreUsers = () => {
    if (!hasMoreData) {
      return;
    }

    refetch({
      data: {
        limit: LIMIT,
        offset: LIMIT + offset.current,
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
          data={users}
          renderItem={renderItem(props.componentId)}
          ListFooterComponent={<Loading loading={hasMoreData.current} />}
          onEndReachedThreshold={0.3}
          onEndReached={moreUsers}
        />
      )}
    </SafeAreaView>
  );
};
