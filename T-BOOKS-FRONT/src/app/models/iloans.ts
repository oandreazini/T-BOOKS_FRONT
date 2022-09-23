export interface ILoans {
  id?: any;
  start?: string;
  finish?: string;
  valuation?: any;
  comment?: string;
  user?: {
    id?: any;
    name?: string;
    email?: string;
    phone?: string;
    city?: string;
    username?: string;
    password?: string;
    roles?: {
      id?: any;
      name?: string;
    };
  };
  book?: {
    id?: any;
    title?: string;
    isbn?: string;
    synopsis?: string;
    author?: string;
    editorial?: string;
    usuario?: {
      id?: any;
      name?: string;
      email?: string;
      phone?: string;
      city?: string;
      username?: string;
      password?: string;
      roles?: {
        id?: any;
        name?: string;
      };
    };
  }



}
