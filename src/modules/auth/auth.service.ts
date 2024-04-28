import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateVendorDto } from './dto/createVendor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createVendor(createVendorDto: CreateVendorDto) {
    // try {
      const userExist = await this.checkUserExist(
        createVendorDto.email,
        `${createVendorDto.dialCode}--${createVendorDto.phoneNumber}`,
      );
      if(userExist){
        throw new ConflictException("User already exists with same email or phone")
      }

      console.log(userExist, ">>>> userExist")

      // const entity = plainToClass(User, createVendorDto);   or we can do like this also
      const entity = Object.assign(new User(), createVendorDto);
      const res = await this.userRepository.save(entity);
      return res;
    // } catch (error) {
    //   console.log(error, '>>>>> error');
    //   throw new HttpException(
    //     'Something went wrong',
    //     HttpStatus.INTERNAL_SERVER_ERROR,
    //   );
    // }
  }

  async checkUserExist(email, completePhoneNumber) {
    const users = this.userRepository.findOne({
      where: [{ email: email }, { completePhoneNumber: completePhoneNumber }],
    });

    return users;
  }

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}