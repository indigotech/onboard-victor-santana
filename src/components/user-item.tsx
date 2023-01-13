import React from 'react';
import {Text, View} from 'react-native';
import {UserNode} from '../utils/models';

export const UserItem = ({name, email}: UserNode) => {
  return (
    <View>
      <Text>Nome: {name}</Text>
      <Text>Email: {email}</Text>
    </View>
  );
};
