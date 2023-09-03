import { FixedIncomeAddDTO } from 'src/dto/investiment/FixedIncomeDTO';
import { FixedIncomeService, SearchByToColumn } from '../../services/investiment/FixedIncomeService';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';

@Controller({
  version: '1'
})
export class FixedIncomeController {

  constructor(private readonly fixedIncomeService: FixedIncomeService) {}

  @Get('investiments')
  async getListFixedIncome(@Res() res) {

    const fixedIncomes = await this.fixedIncomeService.getAllFixedIncomes();

    return res.status(200).json({fixedIncomes});
  }

  @Post('investiments',)
  async addFixedIncome(@Res() res, @Body() data: FixedIncomeAddDTO) {
    if(!data){
      res.status(400).json({
        erro: 'Envie os dados necessários'
      })
    }

    const fixedIncome = await this.fixedIncomeService.addFixedIncome(data);

    res.status(200).json(fixedIncome);
  }

  @Put('investiments/')
  async updateStatus(@Res() res, @Query('id') id: string) {
    const fixedIncome = await this.fixedIncomeService.changeStatus(id);

    if(!fixedIncome){
      return res.status(404).json({
        error: 'investimento não cadastrado'
      });
    }

    return res.status(200).json(fixedIncome);
  }

  @Delete('investiments/:id')
  async deleteFixedIncome(@Res() res, @Param('id') id: string) {

    await this.fixedIncomeService.removeFixedIncome(id);

    return res.status(204).json({});
  }

  @Get('investiments/details')
  async getDetails(@Res() res, @Query("id") id: string){

    const fixedIncome = await this.fixedIncomeService.getDetails(id);

    if(!fixedIncome){
      return res.status(404).json({
        error: "investimento não encontrado"
      })
    }

    return res.status(200).json(fixedIncome);
  }

  @Get('investiments/ordenation')
  async getOrderBy(@Res() res, @Query("search_by") search_by: string, @Query("ordem_by") ordem_by: string){

    const fixedIncomes = await this.fixedIncomeService.getOrdemFixedIncomes(SearchByToColumn[search_by], ordem_by);

    return res.status(200).json({ fixedIncomes })

  }

  @Get('investiments/filter')
  async getFilterFixedIncome(@Res() res, @Query("filter_by") filter_by: string, @Query("value") value:string){
    const fixedIncomes = await this.fixedIncomeService.getFilterFixedIncomes(SearchByToColumn[filter_by], value);
    res.status(200).json({ fixedIncomes });
  }
}
