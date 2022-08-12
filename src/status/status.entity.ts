import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Status {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
