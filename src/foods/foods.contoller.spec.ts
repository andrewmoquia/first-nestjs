import { Test, TestingModule } from '@nestjs/testing';
import { FoodsContoller } from './foods.controller';

describe('Cars Controller', () => {
  let controller: FoodsContoller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodsContoller],
    }).compile();

    controller = module.get<FoodsContoller>(FoodsContoller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});