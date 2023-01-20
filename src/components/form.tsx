import React from 'react';
import {FormField, FormLabel} from './styles/form';
import {FormContainer} from './styles/general';

export interface FormProps {
  error: boolean;
  label: string;
  title: string;
  changeText: any;
  isPassword: boolean;
}

export const StyledForm: React.FC<FormProps> = props => {
  return (
    <FormContainer>
      <FormLabel>{props.title}</FormLabel>
      <FormField
        placeholder={props.label}
        onChangeText={props.changeText}
        secureTextEntry={props.isPassword}
      />
    </FormContainer>
  );
};
