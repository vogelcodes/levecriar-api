import { uuid } from 'uuidv4';
import Item from './Item';

class Trousseau {
  id: string;

  name: string;

  dpp: Date;

  location: string;

  userId: string;

  list: [] | [Item];

  constructor(name: string, dpp: Date, location: string, userId: string) {
    this.id = uuid();
    this.name = name;
    this.dpp = dpp;
    this.location = location;
    this.userId = userId;
    this.list = [];
  }
}
export default Trousseau;
