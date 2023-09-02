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

@Controller('/investiment')
export class FixedIncomeController {
  constructor(private readonly fixedIncomeService: FixedIncomeService) {}

  @Get('fixed-income')
  @Render('investiment/fixed-income')
  async getListFixedIncome() {
    const fixedIncomes = await this.fixedIncomeService.getAllFixedIncomes();
    return { fixedIncomes };
  }

  @Post('fixed-income')
  async addFixedIncome(@Res() res, @Body() data) {
    await this.fixedIncomeService.addFixedIncome(data);
    res.redirect('/investiment/fixed-income');
  }

  @Put('fixed-income/:id')
  async updateStatus(@Res() res, @Param('id') id: string) {
    const fixedIncome = await this.fixedIncomeService.changeStatus(id);
    return res.status(200).json({ fixedIncome });
  }

  @Delete('fixed-income/:id')
  async deleteFixedIncome(@Res() res, @Param('id') id: string) {
    await this.fixedIncomeService.removeFixedIncome(id);
    return res.status(200).json({});
  }
}
