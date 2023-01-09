import { IsOptional, IsString } from 'class-validator';

export class UpdateRequestDto {
  @IsString()
  @IsOptional()
  name: string;
  @IsString()
  @IsOptional()
  text: string;
}
