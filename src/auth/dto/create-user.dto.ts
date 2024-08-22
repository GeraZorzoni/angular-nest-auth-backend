import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
    // Validaciones al crear usuario
  @IsEmail()
  email: string;
  @IsString()
  name: string;
  @MinLength(6)
  password: string;
}
