export class Loan {
  id?: string;
  start?: string;
  finish?: string;
  valuation?: string;
  comment?: string;
  user?: {
    id?: string;
    name?: string;
    email?: string;
    phone?: string;
    city?: string;
    username?: string;
    password?: string;
    roles?: [
      {
        id?: string;
        name?: string;
      }
    ];
  };
  book?: {
    id?: string;
    title?: string;
    isbn?: string;
    synopsis?: string;
    author?: string;
    editorial?: string;
    usuario?: {
      id?: string;
      name?: string;
      email?: string;
      phone?: string;
      city?: string;
      username?: string;
      password?: string;
      roles?: [
        {
          id?: string;
          name?: string;
        }
      ];
    };
  };
}
