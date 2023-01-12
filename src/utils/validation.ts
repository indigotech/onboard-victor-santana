import {Alert} from 'react-native';
import {loginRequest} from './apollo';

const regexEmail = /.+[@].+\.com/;
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;

export const validate = (
  email: string,
  password: string,
  componentId: string,
) => {
  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);
  if (emailValidation !== '') {
    return Alert.alert(emailValidation);
  }

  if (validatePassword(password) !== '') {
    return Alert.alert(passwordValidation);
  }

  loginRequest(email, password, componentId);
};

export const validateEmail = (email: string) => {
  if (email === '') {
    return 'Campo Email não pode ser vazio!';
  } else if (!regexEmail.test(email)) {
    return 'Formato de email inválido!';
  }
  return '';
};

export const validatePassword = (password: string) => {
  if (password === '') {
    return 'Campo Senha não pode ser vazio!';
  } else if (!regexPassword.test(password)) {
    return 'Formato de senha inválido!';
  }
  return '';
};
