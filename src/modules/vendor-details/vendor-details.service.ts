import { Injectable } from '@nestjs/common';
import { CreateVendorDetailDto } from './dto/create-vendor-detail.dto';
import { UpdateVendorDetailDto } from './dto/update-vendor-detail.dto';

@Injectable()
export class VendorDetailsService {
  create(createVendorDetailDto: CreateVendorDetailDto) {
    return 'This action adds a new vendorDetail';
  }

  findAll() {
    return `This action returns all vendorDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vendorDetail`;
  }

  update(id: number, updateVendorDetailDto: UpdateVendorDetailDto) {
    return `This action updates a #${id} vendorDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} vendorDetail`;
  }
}
