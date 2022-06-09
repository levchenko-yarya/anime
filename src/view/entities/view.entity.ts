import { Column, Model, Table } from "sequelize-typescript";

@Table
export class View extends Model {
  @Column
  name: string;
}
