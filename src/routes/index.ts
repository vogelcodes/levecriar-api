import { Router, request, response } from 'express';
import usersRouter from './users.routes';
import trousseauRouter from './trousseau.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/trousseau', trousseauRouter);
routes.get('/', (request, response) => {
  return response.json({ message: 'API do app Enxoval de LeveCriar.com.br' });
});

export default routes;
