import { Test, TestingModule } from '@nestjs/testing';
import { VendorDetailsController } from './vendor-details.controller';
import { VendorDetailsService } from './vendor-details.service';

describe('VendorDetailsController', () => {
  let controller: VendorDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendorDetailsController],
      providers: [VendorDetailsService],
    }).compile();

    controller = module.get<VendorDetailsController>(VendorDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
