import { BelongsToMany, Column, Model, Table } from 'sequelize-typescript';
import { Role } from '../../roles/roles.model';
import { UserRoles } from '../../roles/user-roles.model';

@Table
export class User extends Model {
  @Column
  username: string;

  @Column
  login: string;

  @Column
  password: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
