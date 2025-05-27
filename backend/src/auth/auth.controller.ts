// backend/src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService }            from './auth.service';
import { LoginDto }               from './dto/login.dto';
import { RegisterDto }            from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    const user = await this.authService.validateUser(dto.email, dto.password);
    const jwt  = await this.authService.login(user);
    return { userId: user.id, ...jwt };
  }

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    const user = await this.authService.register(dto);
    const jwt  = await this.authService.login(user);
    return { userId: user.id, ...jwt };
  }
}
