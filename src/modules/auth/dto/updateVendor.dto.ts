import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateVendorDto } from './createVendor.dto';
import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { VendorDetail } from 'src/modules/vendor-details/entities/vendor-detail.entity';

export class UpdateVendorDto extends PartialType(
  OmitType(CreateVendorDto, ['email', 'dialCode', 'phoneNumber', 'password']),
) {
  //   @IsString()
  @IsObject()
  @IsOptional()
  vendorDetail: VendorDetail;
}
