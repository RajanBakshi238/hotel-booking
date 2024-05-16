import { Module } from '@nestjs/common';
import { VendorDetailsService } from './vendor-details.service';
import { VendorDetailsController } from './vendor-details.controller';
import { AuthService } from '../auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorDetail } from './entities/vendor-detail.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([VendorDetail]),
  ],
  controllers: [VendorDetailsController],
  providers: [VendorDetailsService, AuthService],
})
export class VendorDetailsModule {}
