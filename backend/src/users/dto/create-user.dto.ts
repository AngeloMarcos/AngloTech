// backend/src/users/dto/create-user.dto.ts
export class CreateUserDto {
  email!: string;
  password!: string;
  name?: string;
  address?: string;
  gender?: string;
  phone?: string;
}
