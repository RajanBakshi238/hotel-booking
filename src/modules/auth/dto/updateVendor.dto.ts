import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateVendorDto } from './createVendor.dto';

export class UpdateVendorDto extends PartialType(
  OmitType(CreateVendorDto, ['email']),
) {}
