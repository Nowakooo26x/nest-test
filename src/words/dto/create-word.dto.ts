import { IsNotEmpty } from 'class-validator';

export class CreateWordDto {
  @IsNotEmpty()
  polish: string;

  @IsNotEmpty()
  english: string;
}
