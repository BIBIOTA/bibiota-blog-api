import { Module, CacheModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Traffic, TrafficSchema } from './traffic.model';
import { TrafficService } from './traffic.service';
import { TrafficResolver } from './traffic.resolver';

@Module({
  imports: [
    CacheModule.register(),
    MongooseModule.forFeature([{ name: Traffic.name, schema: TrafficSchema }]),
  ],
  providers: [TrafficService, TrafficResolver],
})
export class TrafficModule {}
