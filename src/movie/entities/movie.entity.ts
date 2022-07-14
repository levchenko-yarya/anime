import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Movie extends Model {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  year: number;

  @Column
  episodes: number;

  @Column
  url: string;
}
