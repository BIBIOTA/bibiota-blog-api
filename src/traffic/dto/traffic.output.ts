import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('TrafficOutput')
export class TrafficOutput {
  @Field(() => Number)
  count: number;
  @Field(() => Number)
  created_at: number;
  @Field(() => Date)
  date: Date;
  @Field(() => String)
  traffic_uuid: string;
  @Field(() => Number)
  updated_at: number;
}
