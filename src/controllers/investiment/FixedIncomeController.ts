import { FixedIncomeService } from '../../services/investiment/FixedIncomeService';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Render,
  Res,
} from '@nestjs/common';

@Controller()
export class FixedIncomeController {
  constructor(private readonly fixedIncomeService: FixedIncomeService) {}

  @Get('/investiment/fixed-income')
  @Render('investiment/fixed-income')
  async getListFixedIncome() {
    const fixedIncomes = await this.fixedIncomeService.getListFixedIncomes();
    return { fixedIncomes };
  }

  @Post('/investiment/fixed-income')
  async addFixedIncome(@Res() res, @Body() data) {
    await this.fixedIncomeService.addFixedIncome(data);
    res.redirect('/investiment/fixed-income');
  }

  @Put('/investiment/fixed-income/:id')
  async updateStatus(@Res() res, @Param('id') id: string) {
    await this.fixedIncomeService.changeStatus(id);
    return res.json();
  }

  @Delete('/investiment/fixed-income/:id')
  async deleteFixedIncome(@Res() res: Response, @Param('id') id: string) {
    await this.fixedIncomeService.removeFixedIncome(id);
    return res.json();
  }
}
