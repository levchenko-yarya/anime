import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../user/entities/user.entity";
import { Role } from "./roles.model";

@Table({ tableName: "user_roles" })
export class UserRoles extends Model<UserRoles> {

  @ForeignKey(() => Role)
  @Column
  roleId: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

}