import { Module, CacheModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Traffic, TrafficSchema } from './traffic.model';
import { TrafficService } from './traffic.service';
import { TrafficController } from './traffic.controller';
@Module({
  imports: [
    CacheModule.register(),
    MongooseModule.forFeature([{ name: Traffic.name, schema: TrafficSchema }]),
  ],
  controllers: [TrafficController],
  providers: [TrafficService],
})
export class TrafficModule {}
