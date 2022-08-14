import { Output, ResponseMessageType } from '../../dto/output.dto';

export type TrafficData = {
  date: Date;
  count: number;
  totalCount: number;
};

export class TrafficOutput implements Output {
  status: boolean;
  message: ResponseMessageType;
  data: TrafficData;
}
