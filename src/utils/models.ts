export interface UserNode {
  birthDate: string;
  email: string;
  id: string;
  name: string;
  phone: string;
  role: string;
}

export interface QueryUsersList {
  users: {
    nodes: UserNode[];
    pageInfo: {
      hasNextPage: boolean;
    };
  };
}
