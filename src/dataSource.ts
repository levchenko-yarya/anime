import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3308,
  username: 'admin',
  password: '123456',
  database: 'test-incode-group',
  synchronize: true,
  logging: false,
  entities: ['src/**/*.entity.{ts,js}'],
});
