import { Module } from '@nestjs/common';
import { GateService } from './gate.service';
import { MongooseModule } from '@nestjs/mongoose';
import { In_requests, InRequestsSchema } from './schema/inRequests.schema';
import { Out_requests, OutRequestsSchema } from './schema/outRequests.schema';
import { GateHandler } from './gate.handler';
import { JsonRpcModule } from '@jashkasoft/nestjs-json-rpc';

@Module({
  imports: [
    JsonRpcModule.forRoot({
      path: '/rpc', // path to RPC
    }),
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
  providers: [GateService, GateHandler],
})
export class GateModule {}
