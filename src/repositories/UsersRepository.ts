import User from '../models/User';

interface CreateUserDTO {
  email: string;
  name: string;
}

interface FindUserDTO {
  name: string;
  email: string;
}

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public all(): User[] {
    return this.users;
  }

  public findByEmail({ email }: Omit<FindUserDTO, 'name'>): null | User {
    const finduser = this.users.find(user => email === user.email);
    return finduser || null;
  }

  public create({ email, name }: CreateUserDTO): User {
    const user = new User({ name, email });
    this.users.push(user);
    return user;
  }
}

export default UsersRepository;
