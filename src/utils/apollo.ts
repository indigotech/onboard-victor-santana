import {gql} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginMutation = (email: string, password: string) => {
  return gql`
    mutation Login {
      login(data: {email: "${email}", password: "${password}"}) {
        token
      }
    }
  `;
};

export const asyncStorage = (key: string, value: string) => {
  try {
    AsyncStorage.setItem(key, value);
  } catch {
    throw 'Chave inexistente';
  }
};
