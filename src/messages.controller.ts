import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { CreateMassagesDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class messagesController {
  constructor(public messagesService: MessagesService) {}
  @Get()
  @HttpCode(200)
  async recieve() {
    return await this.messagesService.findAll();
  }

  @Get('/:id')
  @HttpCode(200)
  async getById(@Param('id') id: string) {
    console.log(id);
    const messages = await this.messagesService.findOne(id);

    if (!messages) {
      throw new NotFoundException('Message not found');
    }
    return messages;
  }

  @Post()
  @HttpCode(201)
  async create(@Body() input: CreateMassagesDto) {
    console.log();
    const obj = {
      mail: await this.messagesService.create(input.mail, input.password),
      password: await this.messagesService.create(input.mail, input.password),
    };
    return obj;
  }
}
