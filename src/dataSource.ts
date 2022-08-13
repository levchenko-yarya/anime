import { DataSource } from 'typeorm';
import { Genre } from './genre/genre.entity';
import { Movie } from './movie/movie.entity';
import { Status } from './status/status.entity';
import { User } from './user/user.entity';
import { View } from './view/view.entity';

export const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3308,
  username: 'admin',
  password: '123456',
  database: 'test',
  synchronize: true,
  logging: false,
  entities: [User, Genre, Movie, Status, View],
  // entities: ['src/**/*.entity.{ts,js}'],
});
