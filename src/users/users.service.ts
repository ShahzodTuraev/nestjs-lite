import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Shon', age: '27', role: 'INTERN' },
    { id: 2, name: 'Tim', age: '37', role: 'ADMIN' },
    { id: 3, name: 'Simon', age: '30', role: 'ENGINEER' },
    { id: 4, name: 'Ali', age: '28', role: 'INTERN' },
    { id: 5, name: 'Adam', age: '39', role: 'INTERN' },
    { id: 6, name: 'Ben', age: '25', role: 'ENGINEER' },
    { id: 7, name: 'Boqi', age: '35', role: 'ADMIN' },
    { id: 8, name: 'Alex', age: '31', role: 'ENGINEER' },
    { id: 9, name: 'David', age: '26', role: 'ENGINEER' },
    { id: 10, name: 'Leo', age: '23', role: 'INTERN' },
  ];
  findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }
  findOne(id: number) {
    const user = this.users.find((user) => user?.id === id);
    return user;
  }
  create(user: {
    name: string;
    age: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }
  update(
    id: number,
    updatedUser: {
      name?: string;
      age?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });
    return this.findOne(id);
  }
  delete(id: number) {
    const deletedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return deletedUser;
  }
}
