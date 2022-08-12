import { Sequelize } from 'sequelize-typescript';
import { Genre } from '../genre/entities/genre.entity';
import { Movie } from '../movie/entities/movie.entity';
import { Link } from '../movie/entities/link.entity';
import { User } from '../user/entities/user.entity';
import { View } from '../view/entities/view.entity';
import { Status } from '../status/entities/status.entity';
//import { Role } from '../roles/roles.model';
//import { UserRoles } from '../roles/user-roles.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3308,
        username: 'admin',
        password: '123456',
        database: 'test',
      });
      sequelize.addModels([Genre]);
      sequelize.addModels([Movie]);
      sequelize.addModels([Link]);
      sequelize.addModels([User]);
      //sequelize.addModels([Role]);
      //sequelize.addModels([UserRoles]);
      sequelize.addModels([View]);
      sequelize.addModels([Status]);
      Genre.belongsToMany(Movie, { through: Link });
      Movie.belongsToMany(Genre, { through: Link });
      //User.belongsToMany(Role, { through: UserRoles });
      //Role.belongsToMany(User, { through: UserRoles });
      User.hasMany(View);
      View.hasMany(Status);
      Movie.hasMany(Status);
      User.hasMany(Status);
      await sequelize.sync();
      return sequelize;
    },
  },
];
