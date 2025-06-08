// backend/src/auth/auth.module.ts

import { Module }           from '@nestjs/common';
import { TypeOrmModule }    from '@nestjs/typeorm';
import { PassportModule }   from '@nestjs/passport';
import { JwtModule }        from '@nestjs/jwt';

import { AuthService }      from './auth.service';
import { AuthController }   from './auth.controller';
import { User }             from '../entities/user.entity';
import { JwtStrategy }      from './jwt.strategy';

@Module({
  imports: [
    // traz o repositório de User
    TypeOrmModule.forFeature([User]),

    // passport + jwt
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secretKey',
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,           // estratégia que extrai e valida o token
  ],
  controllers: [AuthController],
  exports: [AuthService],  // para que outros módulos (ex: UsersModule) possam injetar o AuthService
})
export class AuthModule {}
