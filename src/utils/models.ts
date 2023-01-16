import {NavigationComponentProps} from 'react-native-navigation';

export interface UserNode {
  birthDate: string;
  email: string;
  id: string;
  name: string;
  phone: string;
  role: string;
}

<<<<<<< HEAD
export interface User {
  birthDate: string;
  email: string;
  name: string;
  phone: string;
  role: string;
  password: string;
}

=======
>>>>>>> 75be5dd (feat: adding infinity scroll pagination)
export interface QueryUsersList {
  users: {
    nodes: UserNode[];
    pageInfo: {
      hasNextPage: boolean;
    };
  };
}
<<<<<<< HEAD

export interface AddUserProps extends NavigationComponentProps {
  onSuccess(): void;
}

export interface UserDetailProps {
  userId: string;
}
=======
>>>>>>> 75be5dd (feat: adding infinity scroll pagination)
