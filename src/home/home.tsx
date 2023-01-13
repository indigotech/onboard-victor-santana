import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

interface User {
  userName: string;
  userEmail: string;
}

const userList: User[] = [
  {
    userName: 'joao12',
    userEmail: 'joao12@taqtile.com.br',
  },
  {
    userName: 'guilherme2001',
    userEmail: 'gui2001@taqtile.com.br',
  },
  {
    userName: 'leth',
    userEmail: 'leticia@taqtile.com.br',
  },
  {
    userName: 'cecilia',
    userEmail: 'cecilia@taqtile.com.br',
  },
];

export const HomeScreen = () => {
  const renderItem = ({item}: ListRenderItemInfo<User>) => {
    return (
      <View>
        <Text>Nome: {item.userName}</Text>
        <Text>Email: {item.userEmail}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <Text>Lista de usuários: </Text>
      <FlatList data={userList} renderItem={renderItem} />
    </SafeAreaView>
  );
};
