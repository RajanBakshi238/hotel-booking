import { Body, Controller, Post } from '@nestjs/common';
import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/createBusiness.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Business')
@Controller({
  path: 'business',
  version: '1'
})
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}


  @Post('create-vendor')
  createVendor(@Body() createVendorDto: CreateBusinessDto) {
    return this.businessService.createBusiness(createVendorDto);
  }
}
