import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User }       from './entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host:     process.env.DB_HOST   || 'localhost',
  port:     parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USER   || 'root',
  password: process.env.DB_PASS   || 'root',
  database: process.env.DB_NAME   || 'plataforma',
  entities: [User],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
  logging: false,
});
