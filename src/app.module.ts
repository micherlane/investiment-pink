import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FixedIncomeController } from './controllers/investiment/FixedIncomeController';
import { FixedIncomeService } from './services/investiment/FixedIncomeService';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController, FixedIncomeController],
  providers: [AppService, FixedIncomeService],
})
export class AppModule {}
