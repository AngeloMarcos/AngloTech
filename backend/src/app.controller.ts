// backend/src/app.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { CreateUserDto } from "./users/dto/create-user.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("users")
  getUsers() {
    return this.appService.findAll();
  }

  @Post("users")
  async register(@Body() dto: CreateUserDto) {
    // você pode adicionar validações aqui, e.g. checar email duplicado
    const exists = await this.appService
      .findAll()
      .then((list) => list.find((u) => u.email === dto.email));
    if (exists) {
      throw new BadRequestException("E-mail já cadastrado");
    }
    const user = await this.appService.create(dto);
    // não retorne a senha ao cliente
    const { password, ...rest } = user;
    return rest;
  }
}
