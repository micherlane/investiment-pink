import { FixedIncomeService } from '../../services/investiment/FixedIncomeService';
import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';

@Controller()
export class FixedIncomeController {
  constructor(private readonly fixedIncomeService: FixedIncomeService) {}

  @Get('/investiment/fixed-income')
  @Render('investiment/fixed-income')
  async getListFixedIncome() {
    const fixedIncomes = await this.fixedIncomeService.getListFixedIncomes();
    console.log(fixedIncomes);
    return { fixedIncomes };
  }

  @Post('/investiment/fixed-income')
  async addFixedIncome(@Res() res, @Body() data) {
    await this.fixedIncomeService.addFixedIncome(data);
    res.redirect('/investiment/fixed-income');
  }
}
