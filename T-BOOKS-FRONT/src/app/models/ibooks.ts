export interface IBooks {
  id: number;
  title: string;
  isbn: string;
  synopsis: string;
  author: {
    id: number;
    nameSurname: string;
  };
  editorial: {
    id: number;
    name: string;
  };
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
