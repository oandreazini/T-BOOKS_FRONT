export class PushBook {
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
    city?: string,
    username?: string;
    password?: string;
    roles?: [{
      id?: string;
      name?: string;
    }];
  };
}
