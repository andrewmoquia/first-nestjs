import { Controller, Get, Post, Req, Body, Request, Param} from '@nestjs/common';

@Controller('foods')
export class FoodsContoller {

  //READ
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

  @Get(':id')
  findOne(@Req() request: Request): {} {
      return {
          id: 24,
          name: 'egg',
          stock: 4
      }
  }
  
  //CREATE 
  @Post()
  async create(@Body() foodParams){
      return `I got your post request!
              You want to create a ${foodParams.make}`;
  };
  
  //UPDATE 
  @Post(':id')
  async update(@Body() foodParams, @Param() params) {
      return `I got your post request!
              You want to edit a ${foodParams.make} belonging to ${params.id}`;
  };

  //DELETE
  @Post(':id/delete')
  async delete(@Param() params) {
      return `You delete ${params.id}`
  }
}