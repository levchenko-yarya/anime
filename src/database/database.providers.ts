import { Sequelize } from "sequelize-typescript";
import { Genre } from "../genre/entities/genre.entity";
import { Movie } from "../movie/entities/movie.entity";
import { Link } from "../Movie/entities/link.entity";
import { User } from "../user/entities/user.entity";
import { View } from "../view/entities/view.entity";

export const databaseProviders = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: "mysql",
        host: "localhost",
        port: 3306,
        username: "admin",
        password: "123456",
        database: "test"
      });
      sequelize.addModels([Genre]);
      sequelize.addModels([Movie]);
      sequelize.addModels([Link]);
      sequelize.addModels([User]);
      sequelize.addModels([View]);
      Genre.belongsToMany(Movie, { through: Link });
      Movie.belongsToMany(Genre, { through: Link });
      await sequelize.sync();
      return sequelize;
    }
  }
];