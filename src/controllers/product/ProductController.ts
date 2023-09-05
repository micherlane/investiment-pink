import { ProductAddDTO } from 'src/dto/product/ProductAddDTO';
import { ProductService, SearchByToColumn } from '../../services/product/ProductService';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductModel } from 'src/models/product/ProductModel';

@ApiTags('products')
@Controller({
  version: '1'
})
export class ProductController {

  constructor(private readonly productService: ProductService) { }

  @ApiResponse({
    status: HttpStatus.OK,
    type: [ProductModel],
    description: 'Retorna todos os investimentos'
  })
  @Get('products')
  async getListProducts(@Res() res) {

    const products = await this.productService.getAllProducts();

    return res.status(HttpStatus.OK).json(products);
  }

  @ApiBody({ type: ProductAddDTO })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: ProductModel,
    description: 'Cria um novo investimento'
  })
  @Post('products',)
  async addProducts(@Res() res, @Body() data: ProductAddDTO) {
    if (!data) {
      res.status(HttpStatus.BAD_REQUEST).json({
        erro: 'Envie os dados necessários'
      })
    }

    const product = await this.productService.addProduct(data);

    res.status(HttpStatus.OK).json(product);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    type: ProductModel,
    description: 'Atualiza o estado para de um investimento para disponível/indisponível'
  })
  @Put('products/')
  async updateStatusProduct(@Res() res, @Query('id') id: string) {
    const product = await this.productService.changeStatusProduct(id);

    if (!product) {
      return res.status(HttpStatus.NOT_FOUND).json({
        error: 'investimento não cadastrado'
      });
    }

    return res.status(HttpStatus.OK).json(product);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Deleta um investimento cujo id foi informado'
  })
  @Delete('products/:id')
  async deleteProducts(@Res() res, @Param('id') id: string) {

    await this.productService.removeProduct(id);

    return res.status(204).json({});
  }

  @ApiResponse({
    status: HttpStatus.OK,
    type: ProductModel,
    description: 'Traz detalhes de um investimento cujo ID foi informado'
  })
  @Get('products/details')
  async getDetailsProduct(@Res() res, @Query("id") id: string) {

    const product = await this.productService.getDetails(id);

    if (!product) {
      return res.status(HttpStatus.NOT_FOUND).json({
        error: "investimento não encontrado"
      })
    }

    return res.status(HttpStatus.OK).json(product);
  }


  @ApiResponse({
    status: HttpStatus.OK,
    type: [ ProductModel ],
    description: 'Retorna uma lista de investimentos ordenados por um atributo em ordem crescente ou descrescente'
  })
  @Get('products/ordenation')
  async getOrderByProduct(@Res() res, @Query("search_by") search_by: string, @Query("ordem_by") ordem_by: string) {

    const product = await this.productService.getOrdemProducts(SearchByToColumn[search_by], ordem_by);

    return res.status(HttpStatus.OK).json(product)

  }

  @ApiResponse({
    status: HttpStatus.OK,
    type: [ProductModel],
    description: 'Retorna uma lista de investimentos com os valores passados no filtro'
  })
  
  @Get('products/filter')
  async getFilterProducts(@Res() res, @Query("filter_by") filter_by: string, @Query("value") value: string) {
    const products = await this.productService.getFilterProducts(SearchByToColumn[filter_by], value);
    res.status(HttpStatus.OK).json(products);
  }
}
