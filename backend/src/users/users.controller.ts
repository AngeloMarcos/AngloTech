// backend/src/users/users.controller.ts
import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private svc: UsersService) {}

  @Get()
  getAll() {
    return this.svc.findAll();
  }
}
