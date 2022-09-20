export interface IBooks {
  id: number;
  title: string;
  isbn: string;
  synopsis: string;
  author:string;
  editorial: string;
  user: {
    id: number;
    name: string;
    email: string;
    phone: string;
    city: string;
    username: string;
    password: string;
    role: string;
  };
}
