import { Router } from 'express';
import usersRouter from './users.routes';
import trousseauRouter from './trousseau.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/trousseau', trousseauRouter);
routes.get('/', (request, response) => {
  return response.send(
    '<h1>API do app Enxoval de <a href="https://enxoval.levecriar.com.br">LeveCriar.com.br</a>',
  );
});

export default routes;
