import {
  RpcId,
  RpcPayload,
  RpcVersion,
  RpcMethod,
  RpcHandler,
  RpcMethodHandler,
} from '@jashkasoft/nestjs-json-rpc';
import { RpcPayloadDto } from './dto';
import { GateService } from './gate.service';

@RpcHandler({
  method: 'weather',
})
export class GateHandler {
  constructor(private readonly gateService: GateService) {}
  @RpcMethodHandler('find')
  public async add(
    @RpcPayload() payload: RpcPayloadDto,
    @RpcVersion() version: string,
    @RpcId() id: number | string,
    @RpcMethod() method: string,
  ) {
    return this.gateService.get({ payload, version, id, method });
  }
}
