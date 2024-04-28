import { PartialType } from '@nestjs/mapped-types';
import { CreateVendorDetailDto } from './create-vendor-detail.dto';

export class UpdateVendorDetailDto extends PartialType(CreateVendorDetailDto) {}
