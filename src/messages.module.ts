import { Module } from '@nestjs/common';
import { messagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [messagesController],
  providers: [MessagesService, MessagesRepository],
})
export class messageModule {}
