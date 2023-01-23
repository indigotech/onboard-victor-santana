import {useQuery} from '@apollo/client';
import React from 'react';
import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import {phoneMask} from '../components/user-item';
import {userDetailQuery} from '../utils/apollo';
import {UserDetailProps} from '../utils/models';

export const UserDetailScreen = (props: UserDetailProps) => {
  const {data, loading} = useQuery(userDetailQuery, {
    variables: {id: props.userId},
  });

  return (
    <SafeAreaView>
      <Text>Detalhes do Usuário: </Text>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text>Nome: {data.user.name}</Text>
          <Text>Email: {data.user.email}</Text>
          <Text>Role: {data.user.role}</Text>
          <Text>Telefone: {phoneMask(data.user.phone)}</Text>
          <Text>Data de nascimento: {data.user.birthDate}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};
