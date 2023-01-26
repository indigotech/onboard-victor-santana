import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {UserNode} from '../utils/models';
import {ItemContainer, ItemTitleStyled} from './styles/item';

interface UserItemProps extends UserNode {
  onTap: (id: string) => void;
}

export const phoneMask = (value?: string) => {
  if (!value) {
    return '';
  }
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1)$2')
    .replace(/(\d)(\d{4})$/, '$1-$2');
};

export const UserItem = ({name, email, phone, id, onTap}: UserItemProps) => {
  return (
    <TouchableOpacity onPress={() => onTap(id)}>
      <ItemContainer>
        <ItemTitleStyled>{name}</ItemTitleStyled>
        <Text>Email: {email}</Text>
        <Text>Telefone: {phoneMask(phone)}</Text>
      </ItemContainer>
    </TouchableOpacity>
  );
};
