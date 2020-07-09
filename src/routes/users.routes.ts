import { Router } from 'express';
import { uuid } from 'uuidv4';

import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

const usersRouter = Router();
const usersRepository = new UsersRepository();

usersRouter.get('/', (request, response) => {
  const users = usersRepository.all();
  return response.json(users);
});

usersRouter.post('/', (request, response) => {
  const { name, email } = request.body;
  const findUserByEmail = usersRepository.findByEmail({ email });
  if (findUserByEmail) {
    return response.status(400).json(findUserByEmail);
  }

  const user = usersRepository.create({ name, email });
  return response.json(user);
});

export default usersRouter;
