import { Module } from '@nestjs/common';
import { GateController } from './gate.controller';
import { GateService } from './gate.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Gate, GateSchema } from './schema/gate.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Gate.name,
        schema: GateSchema,
      },
    ]),
  ],
  controllers: [GateController],
  providers: [GateService],
})
export class GateModule {}
