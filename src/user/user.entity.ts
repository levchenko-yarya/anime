import { Column } from 'typeorm';

export class User {
  @Column()
  username: string;

  @Column()
  login: string;

  @Column()
  password: string;
}
