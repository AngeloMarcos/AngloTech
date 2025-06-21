// backend/src/users/users.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("users")
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private svc: UsersService) {}

  @Get()
  getAll() {
    return this.svc.findAll();
  }

  @Get(":id")
  getOne(@Param("id") id: string) {
    return this.svc.findOne(Number(id));
  }

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.svc.create(dto);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() dto: UpdateUserDto) {
    return this.svc.update(Number(id), dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.svc.remove(Number(id));
  }
}
