import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrafficModule } from './traffic/traffic.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TrafficModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.mongoURI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
