// backend/src/app.module.ts

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

// subir um nível para achar o auth
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { CoursesModule } from "./courses/courses.module";

import { User } from "./entities/user.entity";
import { Course } from "./courses/course.entity";
import { Lesson } from "./courses/lesson.entity";
import { Ebook } from "./courses/ebook.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST || "localhost",
      port: parseInt(process.env.DB_PORT || "3306", 10),
      username: process.env.DB_USER || "root",
      password: process.env.DB_PASS || "root",
      database: process.env.DB_NAME || "plataforma",
      entities: [User, Course, Lesson, Ebook],
      synchronize: true,
    }),

    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || "secretKey",
      signOptions: { expiresIn: "3600s" },
    }),

    // permite injetar UserRepository no AppService
    TypeOrmModule.forFeature([User]),

    AuthModule,
    UsersModule,
    CoursesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
