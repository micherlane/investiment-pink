import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {  ProductController } from './controllers/product/ProductController';
import { ProductService } from './services/product/ProductService';


@Module({
  imports: [
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
