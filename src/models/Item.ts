import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('items')
class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  qty: number;

  @Column()
  trsId: string;
}
export default Item;
