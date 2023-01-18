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
<<<<<<< HEAD
=======
>>>>>>> c75485a (feat: adding add user server integration)
export interface User {
  birthDate: string;
  email: string;
  name: string;
  phone: string;
  role: string;
  password: string;
}

<<<<<<< HEAD
=======
>>>>>>> 75be5dd (feat: adding infinity scroll pagination)
=======
>>>>>>> c75485a (feat: adding add user server integration)
export interface QueryUsersList {
  users: {
    nodes: UserNode[];
    pageInfo: {
      hasNextPage: boolean;
    };
  };
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c75485a (feat: adding add user server integration)

export interface AddUserProps extends NavigationComponentProps {
  onSuccess(): void;
}
<<<<<<< HEAD

export interface UserDetailProps {
  userId: string;
}
=======
>>>>>>> 75be5dd (feat: adding infinity scroll pagination)
=======
>>>>>>> c75485a (feat: adding add user server integration)
