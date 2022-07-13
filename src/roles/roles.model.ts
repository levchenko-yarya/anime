import { BelongsToMany, Column, Model, Table } from "sequelize-typescript";
import { User } from "../user/entities/user.entity";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreationAttrs> {

  @Column
  value: string;

  @Column
  description: string;

  @BelongsToMany(()=>User, ()=>UserRoles)
  users: User[]
}