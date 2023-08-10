import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FixedIncomeController } from './controllers/investiment/FixedIncomeController';
import { FixedIncomeService } from './services/investiment/FixedIncomeService';

@Module({
  imports: [],
  controllers: [AppController, FixedIncomeController],
  providers: [AppService, FixedIncomeService],
})
export class AppModule {}
