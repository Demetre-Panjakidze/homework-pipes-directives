export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  aboutMe: string;
  birthData: string;
  status: 'Deleted' | 'Inactive' | 'Active';
}
