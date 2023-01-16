import React from 'react';
import {Text, View} from 'react-native';
import {UserNode} from '../utils/models';

const phoneMask = (value?: string) => {
  if (!value) {
    return '';
  }
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2');
};

export const UserItem = ({name, email, phone}: UserNode) => {
  return (
    <View>
      <Text>Nome: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Telefone: {phoneMask(phone)}</Text>
    </View>
  );
};
