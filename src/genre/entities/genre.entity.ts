import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Genre extends Model {
  @Column
  name: string;
}
