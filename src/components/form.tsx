import React from 'react';
import {FormCaption, FormField, FormLabel} from './styles/form';
import {Container} from './styles/general';

export interface FormProps {
  label: string;
  title: string;
  changeText: React.Dispatch<React.SetStateAction<string>>;
  isPassword: boolean;
  errorMessage?: string;
}

export const StyledForm: React.FC<FormProps> = props => {
  return (
    <Container>
      <FormLabel>{props.title}</FormLabel>
      <FormField
        error={props.errorMessage}
        placeholder={props.label}
        onChangeText={props.changeText}
        secureTextEntry={props.isPassword}
      />
      {props.errorMessage && <FormCaption>{props.errorMessage}</FormCaption>}
    </Container>
  );
};
