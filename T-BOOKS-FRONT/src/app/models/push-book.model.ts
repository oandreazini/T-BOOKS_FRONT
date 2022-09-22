export class PushBook {
  title?: string;
  isbn?: string;
  author?: string;
  editorial?: string;
  synopsis?: string;
  usuario?: {
    id?: string;
    name?: string;
    email?: string;
    phone?: string;
    username?: string;
    password?: string;
    roles?: {
      id?: string;
      name?: string;
    };
  };
}
