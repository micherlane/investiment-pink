import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Render,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  hello(@Query('nome') nome: string) {
    return {
      nome,
    };
  }

  @Post('exibir-hello')
  exibirHello(@Res() res, @Body() input) {
    const nome = input.nome;
    res.redirect(`/?nome=${nome}`, 302);
  }
}
