import {ApolloClient, createHttpLink, gql, InMemoryCache} from '@apollo/client';
import {GraphQLServerError} from '../utils/custom-error';
import {Alert} from 'react-native';
import {getStoredItem, saveOnAsyncStorage} from '../utils/storage';
import {setContext} from '@apollo/client/link/context';

const BASE_URL =
  'https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql';
const link = createHttpLink({uri: BASE_URL});

const authenticationContext = setContext(async (_, {headers}) => {
  let token = await getStoredItem('token');
  return {
    headers: {
      ...headers,
      Authorization: token ? token : '',
    },
  };
});

export const client = new ApolloClient({
  link: authenticationContext.concat(link),
  cache: new InMemoryCache(),
});

export const loginRequest = async (email: string, password: string) => {
  try {
    const mutate = await client.mutate({
      mutation: loginMutation,
      variables: {
        data: {email, password},
      },
    });
    saveOnAsyncStorage('token', mutate.data.login.token);
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

export const usersQuery = gql`
  query Query($data: PageInput) {
    users(data: $data) {
      nodes {
        id
        name
        phone
        birthDate
        email
        role
      }
      pageInfo {
        hasNextPage
        offset
      }
    }
  }
`;

export const createUserMutation = gql`
  mutation CreateUser($data: UserInput!) {
    createUser(data: $data) {
      id
      name
      phone
      birthDate
      email
      role
    }
  }
`;
