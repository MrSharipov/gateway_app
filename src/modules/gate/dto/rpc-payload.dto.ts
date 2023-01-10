import { IsNotEmpty, IsString } from 'class-validator';

export class RpcPayloadDto {
  @IsString()
  @IsNotEmpty()
  payload: string;
}
