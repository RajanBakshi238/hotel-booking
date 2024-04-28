import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendorDetailsService } from './vendor-details.service';
import { CreateVendorDetailDto } from './dto/create-vendor-detail.dto';
import { UpdateVendorDetailDto } from './dto/update-vendor-detail.dto';

@Controller('vendor-details')
export class VendorDetailsController {
  constructor(private readonly vendorDetailsService: VendorDetailsService) {}

  @Post()
  create(@Body() createVendorDetailDto: CreateVendorDetailDto) {
    return this.vendorDetailsService.create(createVendorDetailDto);
  }

  @Get()
  findAll() {
    return this.vendorDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendorDetailDto: UpdateVendorDetailDto) {
    return this.vendorDetailsService.update(+id, updateVendorDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendorDetailsService.remove(+id);
  }
}
