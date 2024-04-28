import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessController } from './business.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessEntity } from './entities/business-entity';

@Module({
  imports: [TypeOrmModule.forFeature([BusinessEntity])],
  controllers: [BusinessController],
  providers: [BusinessService],
  exports: [BusinessService]
})
export class BusinessModule {}
