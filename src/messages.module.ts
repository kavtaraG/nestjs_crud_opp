import { Module } from '@nestjs/common';
import { messagesController } from './messages.controller';

@Module({
  controllers: [messagesController],
})
export class messageModule {}
