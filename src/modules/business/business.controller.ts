import { Body, Controller, Post } from '@nestjs/common';
import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/createBusiness.dto';

@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}


  @Post('create-vendor')
  createVendor(@Body() createVendorDto: CreateBusinessDto) {
    return this.businessService.createBusiness(createVendorDto);
  }
}
