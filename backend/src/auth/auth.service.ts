// backend/src/auth/auth.service.ts
import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import * as bcrypt from "bcrypt";
import { RegisterDto } from "./dto/register.dto";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User> {
    const user = await this.usersRepo.findOne({ where: { email } });
    if (!user) throw new UnauthorizedException("Credenciais inválidas");

    const isHashMatch = await bcrypt.compare(pass, user.password);
    const isPlainMatch = user.password === pass; // apenas em dev!
    if (!(isHashMatch || isPlainMatch)) {
      throw new UnauthorizedException("Credenciais inválidas");
    }
    return user;
  }

  async register(dto: RegisterDto): Promise<User> {
    const exists = await this.usersRepo.findOne({
      where: { email: dto.email },
    });
    if (exists) throw new ConflictException("E-mail já cadastrado");
    const hash = await bcrypt.hash(dto.password, 10);
    const user = this.usersRepo.create({ ...dto, password: hash });
    return this.usersRepo.save(user);
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
