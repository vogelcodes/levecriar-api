import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('trousseaus')
class Trousseau {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  dpp: Date;

  @Column()
  location: string;

  @Column()
  userId: string;
}

export default Trousseau;
