import React from 'react';
import {ActivityIndicator, ListRenderItemInfo} from 'react-native';
import {UserNode} from '../utils/models';
import {UserItem} from './user-item';

export const renderItem = ({item}: ListRenderItemInfo<UserNode>) => {
  return <UserItem {...item} />;
};

export const Loading = ({loading}: {loading: boolean}) => {
  if (loading) {
    return <ActivityIndicator />;
  }
  return null;
};
