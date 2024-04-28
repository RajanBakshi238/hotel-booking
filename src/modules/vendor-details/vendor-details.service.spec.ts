import { Test, TestingModule } from '@nestjs/testing';
import { VendorDetailsService } from './vendor-details.service';

describe('VendorDetailsService', () => {
  let service: VendorDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendorDetailsService],
    }).compile();

    service = module.get<VendorDetailsService>(VendorDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
