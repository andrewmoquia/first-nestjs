import { Controller, Get, Req, Request} from '@nestjs/common';

@Controller('foods')
export class FoodsContoller {
  @Get()
  findAll(@Req() request: Request): {} {
    return [
        {
            name: 'apple',
            stock: 6
        },
        {
            name: 'banana',
            stock: 10
        }
    ]
  }
}