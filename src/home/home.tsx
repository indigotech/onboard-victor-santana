import {useQuery} from '@apollo/client';
import React, {useRef, useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import {NavigationComponentProps} from 'react-native-navigation';
import {AddUserFAB} from '../components/add-user-fab';
import {Loading, renderItem} from '../components/list-functions';
import {H1} from '../components/styles/header';
import {usersQuery} from '../utils/apollo';
import {UserNode} from '../utils/models';
import {goToAddUser} from '../utils/navigation';

const LIMIT = 15;

export const HomeScreen: React.FC<NavigationComponentProps> = props => {
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

  const handleEndReached = () => {
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

  const handleSuccess = () => {
    setUsers([]);
    refetch({
      data: {
        limit: LIMIT,
        offset: 0,
      },
    });
  };

  const handleAddUserFABTap = () => {
    goToAddUser(props.componentId, handleSuccess);
  };

  return (
    <SafeAreaView>
      <H1>Lista de Usuários:</H1>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          keyExtractor={item => item.id}
          data={users}
          renderItem={renderItem(props.componentId)}
          ListFooterComponent={<Loading loading={hasMoreData.current} />}
          onEndReachedThreshold={0.3}
          onEndReached={handleEndReached}
        />
      )}
      <AddUserFAB onTap={handleAddUserFABTap} />
    </SafeAreaView>
  );
};
