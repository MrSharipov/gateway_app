import { Module } from '@nestjs/common';
import { GateController } from './gate.controller';
import { GateService } from './gate.service';
import { MongooseModule } from '@nestjs/mongoose';
import { In_requests, InRequestsSchema } from './schema/inRequests.schema';
import { Out_requests, OutRequestsSchema } from './schema/outRequests.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: In_requests.name,
        schema: InRequestsSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Out_requests.name,
        schema: OutRequestsSchema,
      },
    ]),
  ],
  controllers: [GateController],
  providers: [GateService],
})
export class GateModule {}
