import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  year: number;

  @Column()
  episodes: number;

  @Column()
  url: string;
}
