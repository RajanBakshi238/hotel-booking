import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessEntity } from './entities/business.entity';
import { Repository } from 'typeorm';
import { CreateBusinessDto } from './dto/createBusiness.dto';

@Injectable()
export class BusinessService {
  constructor(
    @InjectRepository(BusinessEntity)
    private businessRepository: Repository<BusinessEntity>,
  ) {}

  async createBusiness(business: CreateBusinessDto) {
    const res = await this.businessRepository.save(business);
    return res;
  }

  async getAllBusiness(){
    const res = await this.businessRepository.find()
    return res
  }
}
