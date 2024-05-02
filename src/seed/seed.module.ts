import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { BusinessService } from 'src/modules/business/business.service';
import { BusinessComand } from './business/business.command';
import { BusinessModule } from 'src/modules/business/business.module';
import { BusinessEntity } from 'src/modules/business/entities/business.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([BusinessEntity]), CommandModule, BusinessModule], //BusinessModule
  controllers: [],
  providers: [BusinessComand ], //BusinessService
})
export class SeedModule {}
