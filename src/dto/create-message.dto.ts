import { IsString, IsEmail } from 'class-validator';

export class CreateMassagesDto {
  @IsString()
  @IsEmail()
  mail: string;
  password: string;
}
