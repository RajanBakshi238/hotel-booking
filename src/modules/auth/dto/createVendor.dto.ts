import { IsEmail, IsIn, IsNumber, IsString } from 'class-validator';
import { RolesEnum } from 'src/shared/types/RolesEnum';

export class CreateVendorDto {
  @IsString()
  fullName: string;

  @IsNumber()
  dialCode: number;

  @IsEmail({}, { message: 'dialcode should be valid.' })
  email: string;

  @IsNumber()
  phoneNumber: number;

  @IsString({ message: 'password is required.' })
  password: string;

  @IsString({ message: 'role is required.' })
  @IsIn([RolesEnum.USER, RolesEnum.VENDOR], {
    message: 'Roles must be either user or vendor',
  })
  role: string;
}
