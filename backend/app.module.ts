// backend/src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';      // agora válido
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { User }   from './entities/user.entity';
import { Course } from './courses/course.entity';
import { Lesson } from './courses/lesson.entity';
import { Ebook }  from './courses/ebook.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({ /* sua config */ entities: [User, Course, Lesson, Ebook], synchronize: true }),
    PassportModule,
    JwtModule.register({ secret: process.env.JWT_SECRET || 'secretKey', signOptions: { expiresIn: '3600s' } }),
    AuthModule,
    UsersModule,
    CoursesModule,
  ]
})
export class AppModule {}
