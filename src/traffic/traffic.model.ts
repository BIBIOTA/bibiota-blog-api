import { Document, Schema as MongooseSchema } from 'mongoose';
import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuid } from 'uuid';

@ObjectType('Traffic')
@Schema()
export class Traffic {
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => ID)
  @Prop({ type: String, default: uuid })
  traffic_uuid: string;

  @Field(() => Number)
  @Prop()
  count: number;

  @Field(() => Date)
  @Prop({ type: Date, default: Date.now() })
  date: Date;

  @Field(() => Number)
  @Prop({ type: Number, default: +new Date() })
  created_at: number;

  @Field(() => Number)
  @Prop({ type: Number, default: +new Date() })
  updated_at: number;
}

export type TrafficDocument = Traffic & Document;

export const TrafficSchema = SchemaFactory.createForClass(Traffic);
