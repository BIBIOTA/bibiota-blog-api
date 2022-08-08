import { Query, Mutation, Resolver } from '@nestjs/graphql';
import { TrafficOutput } from './dto/traffic.output';
import { TrafficService } from './traffic.service';
import { Traffic } from './traffic.model';
import { UserIp } from './decorator/req.decorator';
import { CACHE_MANAGER, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Resolver(() => Traffic)
export class TrafficResolver {
  constructor(
    private trafficService: TrafficService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Query(() => Traffic)
  async getCount(): Promise<TrafficOutput> {
    const date = this.trafficService.getToday();
    return this.trafficService.find(date);
  }

  @Mutation(() => Traffic)
  async trafficCount(@UserIp() ip): Promise<TrafficOutput> {
    const cacheKey = `traffic_${ip}`;
    const date = this.trafficService.getToday();
    if (await this.cacheManager.get(cacheKey)) {
      return this.trafficService.find(date);
    }
    this.cacheManager.set(cacheKey, true, 60 * 60 * 24);
    return this.trafficService.createOrUpdate(date);
  }
}
