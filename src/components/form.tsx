import React from 'react';
import {FormCaption, FormField, FormLabel} from './styles/form';
import {FormContainer} from './styles/general';

export interface FormProps {
  validate?: boolean;
  label: string;
  title: string;
  changeText: any;
  isPassword: boolean;
  errorMessage?: string;
}

export const StyledForm: React.FC<FormProps> = props => {
  return (
    <FormContainer>
      <FormLabel>{props.title}</FormLabel>
      <FormField
        error={props.validate}
        placeholder={props.label}
        onChangeText={props.changeText}
        secureTextEntry={props.isPassword}
      />
      {props.validate ? <FormCaption>{props.errorMessage}</FormCaption> : null}
    </FormContainer>
  );
};
