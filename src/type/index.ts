export interface IPosts {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

export interface IComments {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
}

export interface IUsers {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}
