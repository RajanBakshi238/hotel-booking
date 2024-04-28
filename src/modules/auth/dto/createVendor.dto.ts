import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsIn, IsNumber, IsString } from 'class-validator';
import { formatEmail } from 'src/shared/functions/normalizeString';
import { RolesEnum } from 'src/shared/types/RolesEnum';

export class CreateVendorDto {
  @ApiProperty()
  @IsString()
  fullName: string;

  @ApiProperty()
  @IsNumber()
  dialCode: number;

  @ApiProperty()
  @IsEmail({}, { message: 'dialcode should be valid.' })
  @Transform(({ value }) => {
    return formatEmail(value);
  })
  email: string;

  @ApiProperty()
  @IsNumber()
  phoneNumber: number;

  @ApiProperty()
  @IsString({ message: 'password is required.' })
  password: string;

  @ApiProperty()
  @IsString({ message: 'role is required.' })
  @IsIn([RolesEnum.USER, RolesEnum.VENDOR], {
    message: 'Roles must be either user or vendor',
  })
  role: string;

  @ApiProperty()
  @IsString()
  designation: string;
}
