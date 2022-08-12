import { Column } from 'typeorm';

export class Genre {
  @Column()
  name: string;
}
