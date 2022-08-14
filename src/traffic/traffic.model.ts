import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuid } from 'uuid';

@Schema()
export class Traffic {
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ type: String, default: uuid })
  traffic_uuid: string;

  @Prop()
  count: number;

  @Prop({ type: Date, default: Date.now() })
  date: Date;

  @Prop({ type: Number, default: +new Date() })
  created_at: number;

  @Prop({ type: Number, default: +new Date() })
  updated_at: number;
}

export type TrafficDocument = Traffic & Document;

export const TrafficSchema = SchemaFactory.createForClass(Traffic);
