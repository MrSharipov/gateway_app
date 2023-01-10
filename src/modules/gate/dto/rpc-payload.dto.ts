import { IsNotEmpty, IsString } from 'class-validator';

export class RpcPayloadDto {
  @IsString()
  @IsNotEmpty()
  city: string;
}
