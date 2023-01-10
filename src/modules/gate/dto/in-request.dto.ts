import { IsNotEmpty, IsString } from 'class-validator';

export class InRequestDto {
  @IsString()
  @IsNotEmpty()
  city: string;
}
