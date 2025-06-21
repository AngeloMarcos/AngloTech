// backend/src/app.service.ts
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./users/dto/create-user.dto";

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepo.find();
  }

  create(data: CreateUserDto): Promise<User> {
    const user = this.usersRepo.create(data); // já faz new User() + assign
    return this.usersRepo.save(user);
  }
}
