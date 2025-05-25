// backend/src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:     process.env.DB_HOST     || 'localhost',
      port:     parseInt(process.env.DB_PORT   || '3306', 10),
      username: process.env.DB_USER     || 'root',
      password: process.env.DB_PASS     || 'root',
      database: process.env.DB_NAME     || 'plataforma',
      entities: [User],
      synchronize: true,        // somente em dev
      autoLoadEntities: true,   // carrega suas entities
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
