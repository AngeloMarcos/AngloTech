// backend/src/users/users.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard }               from '../auth/jwt-auth.guard';
import { UsersService }               from './users.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private svc: UsersService) {}

  @Get()
  getAll() {
    return this.svc.findAll();
  }
}
