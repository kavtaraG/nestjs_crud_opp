import { IsString, IsEmail } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsEmail()
  mail: string;
  password: string;
}
