import { uuid } from 'uuidv4';

class User {
  id: string;

  name: string;

  email: string;

  constructor({ name, email }: Omit<User, 'id'>) {
    this.id = uuid();
    this.email = email;
    this.name = name;
  }
}

export default User;
