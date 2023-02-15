import { Test, TestingModule } from '@nestjs/testing';
import { messagesController } from './messages.controller';

describe('MessagesController', () => {
  let controller: messagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [messagesController],
    }).compile();

    controller = module.get<messagesController>(messagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
