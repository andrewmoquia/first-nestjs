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
        },
        {
            name: 'milk',
            stock: 20
        }
    ]
  }

  @Get('cook')
  cook(@Req() request: Request): {} {
      return [
        {
            "Apple Shake": [
                {
                    name: 'apple',
                    stock: 2
                },
                {
                    name: 'milk',
                    stock: 1
                }
            ]
        },
        {
            "Banana Shake": [
                {
                    name: 'banana',
                    stock: 2
                },
                {
                    name: 'milk',
                    stock: 1
                }
            ]
        }

    ]
  }

  @Get('/:id')
  findOne(@Req() request: Request): {} {
      return {
          id: 24,
          name: 'apple',
          stock: 4
      }
  }
}