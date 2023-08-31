import { FixedIncomeService } from '../../services/investiment/FixedIncomeService';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';

@Controller()
export class FixedIncomeController {
  constructor(private readonly fixedIncomeService: FixedIncomeService) {}

  @Get('/investiment/fixed-income')
  async getListFixedIncome() {
    const fixedIncomes = await this.fixedIncomeService.getListFixedIncomes();
    return { fixedIncomes };
  }

  @Post('/investiment/fixed-income')
  async addFixedIncome(@Res() res, @Body() data) {
    const fixedIncome = await this.fixedIncomeService.addFixedIncome(data);
    res.status(200).json({ fixedIncome });
  }

  @Put('/investiment/fixed-income/:id')
  async updateStatus(@Res() res, @Param('id') id: string) {
    const fixedIncome = await this.fixedIncomeService.changeStatus(id);
    return res.status(200).json({ fixedIncome });
  }

  @Delete('/investiment/fixed-income/:id')
  async deleteFixedIncome(@Res() res, @Param('id') id: string) {
    await this.fixedIncomeService.removeFixedIncome(id);
    return res.status(200).json({});
  }
}
