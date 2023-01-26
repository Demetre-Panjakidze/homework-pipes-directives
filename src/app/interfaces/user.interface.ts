export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  aboutMe: string;
  age: number;
  status: 'Deleted' | 'Inactive' | 'Active';
}
