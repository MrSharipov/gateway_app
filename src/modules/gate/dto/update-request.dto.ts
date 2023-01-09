import { IsOptional, IsString } from 'class-validator';

export class UpdateRequestDto {
  @IsString()
  @IsOptional()
  type: string;
  @IsString()
  @IsOptional()
  text: string;
}
