import { Controller, Get, Post, CACHE_MANAGER, Inject } from '@nestjs/common';
import { TrafficOutput, TrafficData } from './dto/traffic.output';
import { TrafficService } from './traffic.service';
import { Response } from '../trait/response.trait';
import {
  getToday,
  getTimestampFromNowToTommorowMidnight,
} from '../util/time.util';
import { UserIp } from './decorator/req.decorator';
import { Cache } from 'cache-manager';

@Controller('traffic')
export class TrafficController implements Response {
  constructor(
    private trafficService: TrafficService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get()
  async getCount(): Promise<TrafficOutput> {
    const today = getToday();
    const { date, count } = await this.trafficService.find(today);
    const totalCount = await this.trafficService.findTotalCount();

    const responseData = this.setData(date, count, totalCount);
    return Response.success(responseData);
  }

  @Post()
  async trafficCount(@UserIp() ip): Promise<TrafficOutput> {
    const cacheKey = `traffic_${ip}`;
    // If cache exists, return cuurent total count. else, create new cache and count.
    if (await this.cacheManager.get(cacheKey)) {
      return this.getCount();
    }

    const today = getToday();
    const { date, count } = await this.trafficService.createOrUpdate(today);
    const totalCount = await this.trafficService.findTotalCount();

    this.cacheManager.set(
      cacheKey,
      true,
      getTimestampFromNowToTommorowMidnight(),
    );

    const responseData = this.setData(date, count, totalCount);
    return Response.success(responseData);
  }

  private setData(date: Date, count: number, totalCount: number): TrafficData {
    return {
      date,
      count,
      totalCount,
    };
  }
}
