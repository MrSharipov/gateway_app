import { Module } from '@nestjs/common';
import { GateModule } from './modules/gate/gate.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    ConfigModule.forRoot(),
    GateModule,
  ],
})
export class AppModule {}
