import React from 'react';
import {ActivityIndicator, ListRenderItemInfo} from 'react-native';
import {UserNode} from '../utils/models';
import {goToUserDetailScreen} from '../utils/navigation';
import {UserItem} from './user-item';

export const handleTap = (baseId: string, destinyId: string) => {
  goToUserDetailScreen(baseId, destinyId);
};

export const renderItem =
  (componentId: string) =>
  ({item}: ListRenderItemInfo<UserNode>) => {
    return <UserItem {...item} onTap={id => handleTap(componentId, id)} />;
  };

export const Loading = ({loading}: {loading: boolean}) => {
  if (loading) {
    return <ActivityIndicator />;
  }
  return null;
};
