import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user: User = new User();
    // user.fullName = createUserDto.fullName;
    user.fullName = createUserDto.name
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.dialCode = createUserDto.dialCode;
    user.designation = createUserDto.designation;
    user.phoneNumber = createUserDto.phoneNumber;
    user.gender = createUserDto.gender;

    return this.userRepository.save(user);
  }

  findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  viewUser(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  // updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
  //   const user: User = new User();
  //   user.name = updateUserDto.name;
  //   user.age = updateUserDto.age;
  //   user.email = updateUserDto.email;
  //   user.username = updateUserDto.username;
  //   user.password = updateUserDto.password;
  //   user.id = id;
  //   return this.userRepository.save(user);
  // }

  remove(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }
}