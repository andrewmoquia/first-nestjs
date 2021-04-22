import { Controller, Get, Req, Request} from '@nestjs/common';

@Controller('foods')
export class FoodsContoller {
  @Get()
  findAll(@Req() request: Request): string {
    return 'this will eventually return a food collection';
  }
}