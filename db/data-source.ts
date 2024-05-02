import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  password: process.env.DB_PASSWORD ?? "123456789",
  username: process.env.DB_USERNAME ?? "postgres",
  database: process.env.DB_NAME,
  // entities: [User],
  // entities: ['dist/**/*.entity.js'],
  // migrations: ['dist/db/migrations/*.js'],
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
//   synchronize: true,
  logging: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
