import { Router } from 'express';
import { parseISO } from 'date-fns';
import Trousseau from '../models/Trousseau';

const trousseauRouter = Router();

const trousseaus = [];

trousseauRouter.post('/', (request, response) => {
  const { name, dpp, location, userId } = request.body;
  const parsedDpp = parseISO(dpp);
  const trousseau = new Trousseau(name, parsedDpp, location, userId);

  trousseaus.push(trousseau);

  return response.json(trousseau);
});

export default trousseauRouter;
