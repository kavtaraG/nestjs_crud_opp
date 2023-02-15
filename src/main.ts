import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { messageModule } from './messages.module';

async function bootstrap() {
  const app = await NestFactory.create(messageModule);
  app.useGlobalPipes(new ValidationPipe());
  //app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();
