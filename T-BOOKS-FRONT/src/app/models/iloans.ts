export interface ILoans {
  id: number;
  start: string;
  finish: string;
  valuation: number;
  comment: string;
  user: {
    id: number;
    name: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    role: string;
  };
  book: {
    id: number;
    title: string;
    isbn: string;
    synopsis:string;
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
      username: string;
      password: string;
      role: string;
    };
  }



}
