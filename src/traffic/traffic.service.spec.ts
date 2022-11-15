import { Test, TestingModule } from '@nestjs/testing';
import { TrafficService } from './traffic.service';
import { Traffic } from './traffic.model';
import { getModelToken } from '@nestjs/mongoose';

describe('TrafficService', () => {
  let service: TrafficService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TrafficService,
        {
          provide: getModelToken(Traffic.name),
          useValue: Traffic,
        },
      ],
    }).compile();

    service = module.get<TrafficService>(TrafficService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
