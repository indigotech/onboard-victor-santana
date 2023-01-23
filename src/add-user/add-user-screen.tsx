import React from 'react';
import {AddUser} from '../components/add-user';
import {AddUserProps} from '../utils/models';

export const AddUserScreen = (props: AddUserProps) => {
  return (
    <AddUser componentId={props.componentId} onSuccess={props.onSuccess} />
  );
};
