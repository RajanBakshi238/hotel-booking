import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { RolesEnum } from 'src/types/RolesEnum';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateUserDto {
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  fullName: string;

  // @IsNotEmpty()
  // @MinLength(3, { message: 'Username must have atleast 3 characters.' })
  // @IsAlphanumeric(null, {
  //   message: 'Username does not allow other than alpha numeric chars.',
  // })
  // username: string;

  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid Email.' })
  email: string;

  // @IsInt()
  // age: number;

  @IsInt()
  dialCode: number;
  
  @IsNumber()
  phoneNumber: number;

  @IsString()
  @IsEnum(['female', 'male', 'unspecified'])
  gender: string;

  @IsNotEmpty()
  @Matches(passwordRegEx, {
    message: `Password must contain Minimum 8 and maximum 20 characters, 
    at least one uppercase letter, 
    one lowercase letter, 
    one number and 
    one special character`,
  })
  password: string;

  @IsNotEmpty()
  @IsString()
  designation: string;

  @IsString()
  @IsNotEmpty()
  @IsIn([RolesEnum.ADMIN, RolesEnum.USER, RolesEnum.VENDOR])
  type: string

}
