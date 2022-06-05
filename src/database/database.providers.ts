import { Sequelize } from "sequelize-typescript";
import { Genre } from "../genre/entities/genre.entity";

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
      await sequelize.sync();
      return sequelize;
    }
  }
];