import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';
import { BusinessService } from 'src/modules/business/business.service';

@Injectable()
export class BusinessComand {
  constructor(private readonly businessService: BusinessService) {}

  @Command({
    command: 'create:business',
  })
  async create() {
    const res = await this.businessService.createBusiness({
      name: 'restaurants',
    });
    console.log(res, 'business detail');
  }
}
