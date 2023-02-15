import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class messagesController {
  messageService: MessagesService;
  constructor() {
    this.messageService = new MessagesService();
  }
  @Get()
  @HttpCode(200)
  recieve() {
    return this.messageService.findAll();
  }

  @Get('/:id')
  @HttpCode(200)
  getById(@Param('id') id: string) {
    console.log(id);
    return this.messageService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() inputMail: CreateMessageDto) {
    console.log();
    const obj = {
      mail: this.messageService.create(inputMail.password, inputMail.mail),
      password: this.messageService.create(inputMail.password, inputMail.mail),
    };
    return obj;
  }
}
