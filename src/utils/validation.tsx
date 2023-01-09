import {asyncStorage, loginMutation} from './apollo';
import {client} from '../../App';
import {GraphQLServerError} from './server-error';
import {Alert} from 'react-native';

const regexEmail = /.+[@].+\.com/;
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/;

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

export const loginRequest = async (email: string, password: string) => {
  const mutation = loginMutation(email, password);
  try {
    const mutate = await client.mutate({mutation: mutation});
    try {
      asyncStorage('token', JSON.stringify(mutate.data.login.token));
      return Alert.alert('Sucesso!');
    } catch {
      throw 'Não foi possivel autenticar';
    }
  } catch (error) {
    const serverError = error as GraphQLServerError;
    return Alert.alert(serverError.graphQLErrors[0].message);
  }
};
