import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get() //GET /users
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }
  @Get('interns') //GET /users/interns
  findAllInterns() {
    return ['internbek'];
  }
  @Get(':id') //GET /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
  @Post() //POST /users
  create(
    @Body()
    user: {
      name: string;
      age: string;
      role: 'INTERN' | 'ADMIN' | 'ENGINEER';
    },
  ) {
    return this.usersService.create(user);
  }
  @Patch(':id') //PATCH /users/:id
  update(
    @Param('id') id: string,
    @Body()
    updatedUser: {
      name?: string;
      age?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.update(Number(id), updatedUser);
  }
  @Delete(':id') //DELETE /users/:id
  deleteOne(@Param('id') id: string) {
    return this.usersService.delete(Number(id));
  }
}
