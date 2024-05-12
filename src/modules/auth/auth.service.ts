import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateVendorDto } from './dto/createVendor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { plainToClass } from 'class-transformer';
import { LoginInputDto } from './dto/login-input.dto';
import { JwtService } from '@nestjs/jwt';

const saltOrRounds = 10;
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  logger = new Logger(AuthService.name);

  async createVendor(createVendorDto: CreateVendorDto) {
    // try {
    const userExist = await this.checkUserExist(
      createVendorDto.email,
      `${createVendorDto.dialCode}--${createVendorDto.phoneNumber}`,
    );
    if (userExist) {
      throw new ConflictException(
        'User already exists with same email or phone',
      );
    }

    console.log(userExist, '>>>> userExist');
    const hash = await bcrypt.hash(createVendorDto.password, saltOrRounds);

    // const entity = plainToClass(User, createVendorDto);   or we can do like this also
    const entity = Object.assign(new User(), {
      ...createVendorDto,
      password: hash,
    });
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

  // To check user exist with this email or phone number
  async checkUserExist(email, completePhoneNumber) {
    const users = this.userRepository.findOne({
      where: [{ email: email }, { completePhoneNumber: completePhoneNumber }],
    });

    return users;
  }

  async authenticate(loginInputDto: LoginInputDto) {
    try {
      const user = await this.userRepository.findOne({
        where: [{ email: loginInputDto.email, isDeleted: false }],
      });
      if(!user){
        throw new NotFoundException("User not found with this email.")
      }

      const isMatch = await bcrypt.compare(loginInputDto.password, user.password)
      if(!isMatch){
        throw new BadRequestException("Invalid credentials.")
      }
      const accessToken = await this.jwtService.signAsync({...user})

      return {user, accessToken};

    } catch (err) {
      this.logger.error('Error while logging', err);
      throw new InternalServerErrorException();
    }
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
