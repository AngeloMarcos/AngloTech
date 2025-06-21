import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";
import { Course } from "./courses/course.entity";
import { Lesson } from "./courses/lesson.entity";
import { Ebook } from "./courses/ebook.entity";

const dbType = process.env.DB_TYPE || "sqlite";

export const AppDataSource = new DataSource(
  dbType === "sqlite"
    ? {
        type: "sqlite",
        database: process.env.DB_NAME || "database.sqlite",
        entities: [User, Course, Lesson, Ebook],
        migrations: ["src/migrations/*.ts"],
        synchronize: true,
        logging: false,
      }
    : {
        type: "mysql",
        host: process.env.DB_HOST || "localhost",
        port: parseInt(process.env.DB_PORT || "3306", 10),
        username: process.env.DB_USER || "root",
        password: process.env.DB_PASS || "root",
        database: process.env.DB_NAME || "plataforma",
        entities: [User, Course, Lesson, Ebook],
        migrations: ["src/migrations/*.ts"],
        synchronize: true,
        logging: false,
      },
);
