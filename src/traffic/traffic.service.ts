import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Traffic, TrafficDocument } from './traffic.model';

@Injectable()
export class TrafficService {
  constructor(
    @InjectModel(Traffic.name) private trafficModel: Model<TrafficDocument>,
  ) {}

  async find(date: string): Promise<TrafficDocument> {
    return await this.trafficModel.findOne({ date }).exec();
  }

  async findTotalCount(): Promise<number> {
    const raw = await this.trafficModel.find({}).select('count');
    const counts = raw.map((item) => item.count);
    return counts.reduce((acc, cur) => acc + cur, 0);
  }

  async createOrUpdate(date: string): Promise<TrafficDocument> {
    const data = await this.find(date);
    if (data) {
      data.count += 1;
      data.updated_at = +new Date();
      return data.save();
    }

    const trafficModel = new this.trafficModel({ date, count: 1 });
    return trafficModel.save();
  }
}
