import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBusinessDto {
  @ApiProperty()
  @IsString()
  name: string;
}
