export class Loan {
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
    role?: string;
  };
  book?: {
    id?: any;
    title?: string;
    isbn?: string;
    synopsis?: string;
    author?: {
      id?: any;
      nameSurname?: string;
    };
    editorial?: {
      id?: any;
      name?: string;
    };
    user?: {
      id?: any;
      name?: string;
      email?: string;
      phone?: string;
      city?: string;
      username?: string;
      password?: string;
      role?: string;
    };
  };
}
