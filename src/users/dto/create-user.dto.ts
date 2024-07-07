import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  age: string;
  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'Valid role required',
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
