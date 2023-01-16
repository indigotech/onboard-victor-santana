import React from 'react';
import {Text, View} from 'react-native';
import {UserNode} from '../utils/models';

const phoneMask = (value: string) => {
  if (!value) {
    return '';
  }
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d)/, '($1) $2');
  value = value.replace(/(\d)(\d{4})$/, '$1-$2');
  return value;
};

export const UserItem = ({name, email, role, phone, birthDate}: UserNode) => {
  return (
    <View>
      <Text>Nome: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Role: {role}</Text>
      <Text>Telefone: {phoneMask(phone)}</Text>
      <Text>Data de nascimento: {birthDate}</Text>
    </View>
  );
};
