export class PushBook {
  title?: string;
  isbn?: string;
  author?: string;
  editorial?: string;
  synopsis?: string;
  user?: {
    id: any;
    name: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    roles: {
      id: any;
      name: string;
    };
  };
}
