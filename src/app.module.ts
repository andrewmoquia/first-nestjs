import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodsContoller } from './foods/foods.controller';

@Module({
  imports: [],
  controllers: [AppController, FoodsContoller],
  providers: [AppService],
})
export class AppModule {}
