import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateVendorDetailDto } from './dto/create-vendor-detail.dto';
import { UpdateVendorDetailDto } from './dto/update-vendor-detail.dto';
import { plainToClass } from 'class-transformer';
import { VendorDetail } from './entities/vendor-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class VendorDetailsService {
  constructor(
    @InjectRepository(VendorDetail)
    private vendorDetailRepository: Repository<VendorDetail>,
  ) {}

  async create(createVendorDetailDto: CreateVendorDetailDto, user: User) {
    try {
      const entity = plainToClass(VendorDetail, createVendorDetailDto);
      const res = await this.vendorDetailRepository.save(entity);
      return res;
    } catch (error) {
      return new InternalServerErrorException('');
    }
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
