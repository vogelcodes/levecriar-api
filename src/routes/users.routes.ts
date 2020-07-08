import { Router } from 'express';
import { uuid } from 'uuidv4';
import User from '../models/User';

const usersRouter = Router();

const users = [];

usersRouter.post('/', (request, response) => {
  const { name, email } = request.body;
  const user = new User(name, email);
  users.push(user);

  return response.json(user);
});

export default usersRouter;
