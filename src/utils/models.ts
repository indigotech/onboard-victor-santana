import {NavigationComponentProps} from 'react-native-navigation';

export interface UserNode {
  birthDate: string;
  email: string;
  id: string;
  name: string;
  phone: string;
  role: string;
}

export interface User {
  birthDate: string;
  email: string;
  name: string;
  phone: string;
  role: string;
  password: string;
}

export interface QueryUsersList {
  users: {
    nodes: UserNode[];
    pageInfo: {
      hasNextPage: boolean;
    };
  };
}

export interface AddUserProps extends NavigationComponentProps {
  onSuccess(): void;
}

export interface UserDetailProps {
  userId: string;
}
