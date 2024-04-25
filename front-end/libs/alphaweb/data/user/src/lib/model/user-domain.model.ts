export interface User{
  email: string;
  role: string;
  profile: Profile;
}


export interface Profile{
  firstName: string;
  lastName: string;
}
export enum Role{
  Admin ="ADMIN",
  User = "User"
}
// export enum Role{
//   Admin ="0",
//   User = "1"
// }
