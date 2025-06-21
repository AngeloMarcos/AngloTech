// backend/src/users/users.service.ts
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import * as bcrypt from "bcrypt";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  findAll(): Promise<User[]> {
    return this.repo.find({
      select: ["id", "name", "email", "address", "gender", "phone"],
    });
  }

  findOne(id: number): Promise<User | null> {
    return this.repo.findOne({ where: { id } });
  }

  async create(dto: CreateUserDto): Promise<User> {
    const hash = await bcrypt.hash(dto.password, 10);
    const user = this.repo.create({ ...dto, password: hash });
    return this.repo.save(user);
  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    const user = await this.repo.findOneByOrFail({ id });
    if (dto.password) dto.password = await bcrypt.hash(dto.password, 10);
    Object.assign(user, dto);
    return this.repo.save(user);
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
