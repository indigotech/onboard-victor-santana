import {gql} from '@apollo/client';
import {client} from '../../App';
import {GraphQLServerError} from '../utils/custom-error';
import {Alert} from 'react-native';
import {saveOnAsyncStorage} from '../utils/storage';

export const loginRequest = async (email: string, password: string) => {
  try {
    const mutate = await client.mutate({
      mutation: loginMutation,
      variables: {
        data: {email, password},
      },
    });
    saveOnAsyncStorage('token', JSON.stringify(mutate.data.login.token));
    return Alert.alert('Sucesso!');
  } catch (error) {
    const serverError = error as GraphQLServerError;
    return Alert.alert(serverError.graphQLErrors[0].message);
  }
};

const loginMutation = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      token
    }
  }
`;
