import { uuid } from 'uuidv4';

class Item {
  id: string;

  name: string;

  category: string;

  qty: number;

  trsId: string;

  constructor(name: string, category: string, qty: number, trsId: string) {
    this.id = uuid();
    this.name = name;
    this.category = category;
    this.qty = qty;
    this.trsId = trsId;
  }
}
export default Item;
