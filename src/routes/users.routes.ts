import { Router } from 'express';
import { uuid } from 'uuidv4';

import { getCustomRepository } from 'typeorm';
import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  const usersRepository = getCustomRepository(UsersRepository);

  const users = await usersRepository.find();
  return response.json(users);
});

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email } = request.body;
    const createUser = new CreateUserService();
    const user = await createUser.execute({ name, email });
    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
