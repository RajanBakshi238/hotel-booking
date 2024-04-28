import { Module } from '@nestjs/common';
import { VendorDetailsService } from './vendor-details.service';
import { VendorDetailsController } from './vendor-details.controller';

@Module({
  controllers: [VendorDetailsController],
  providers: [VendorDetailsService],
})
export class VendorDetailsModule {}
