import { getCustomRepository } from 'typeorm';
import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface Request {
  name: string;
  email: string;
}
class CreateUserService {
  // private usersRepository: UsersRepository;

  // constructor(usersRepository: UsersRepository) {
  //   this.usersRepository = usersRepository;
  // }

  public async execute({ name, email }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const findUserByEmail = await usersRepository.findByEmail(email);
    if (findUserByEmail) {
      throw Error('Email já cadastrado');
    }

    const user = usersRepository.create({ name, email });

    await usersRepository.save(user);

    return user;
  }
}
export default CreateUserService;
