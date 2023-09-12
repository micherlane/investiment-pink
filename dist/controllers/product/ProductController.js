"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const ProductAddDTO_1 = require("../../dto/product/ProductAddDTO");
const ProductService_1 = require("../../services/product/ProductService");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ProductModel_1 = require("../../models/product/ProductModel");
let ProductController = exports.ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async getListProducts(res) {
        const products = await this.productService.getAllProducts();
        return res.status(common_1.HttpStatus.OK).json(products);
    }
    async addProducts(res, data) {
        if (!data) {
            res.status(common_1.HttpStatus.BAD_REQUEST).json({
                erro: 'Envie os dados necessários'
            });
        }
        const product = await this.productService.addProduct(data);
        res.status(common_1.HttpStatus.OK).json(product);
    }
    async updateStatusProduct(res, id) {
        const product = await this.productService.changeStatusProduct(id);
        if (!product) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                error: 'investimento não cadastrado'
            });
        }
        return res.status(common_1.HttpStatus.OK).json(product);
    }
    async deleteProducts(res, id) {
        await this.productService.removeProduct(id);
        return res.status(204).json({});
    }
    async getDetailsProduct(res, id) {
        const product = await this.productService.getDetails(id);
        if (!product) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                error: "investimento não encontrado"
            });
        }
        return res.status(common_1.HttpStatus.OK).json(product);
    }
    async getOrderByProduct(res, search_by, order_by) {
        const product = await this.productService.getOrdemProducts(search_by, order_by);
        return res.status(common_1.HttpStatus.OK).json(product);
    }
    async getFilterProducts(res, filter_by, value) {
        const products = await this.productService.getFilterProducts(filter_by, value);
        res.status(common_1.HttpStatus.OK).json(products);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: [ProductModel_1.ProductModel],
        description: 'Retorna todos os investimentos'
    }),
    (0, common_1.Get)('products'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getListProducts", null);
__decorate([
    (0, swagger_1.ApiBody)({ type: ProductAddDTO_1.ProductAddDTO }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        type: ProductModel_1.ProductModel,
        description: 'Cria um novo investimento'
    }),
    (0, common_1.Post)('products'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ProductAddDTO_1.ProductAddDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "addProducts", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: ProductModel_1.ProductModel,
        description: 'Atualiza o estado para de um investimento para disponível/indisponível'
    }),
    (0, common_1.Put)('products/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateStatusProduct", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Deleta um investimento cujo id foi informado'
    }),
    (0, common_1.Delete)('products/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProducts", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: ProductModel_1.ProductModel,
        description: 'Traz detalhes de um investimento cujo ID foi informado'
    }),
    (0, common_1.Get)('products/details'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getDetailsProduct", null);
__decorate([
    (0, swagger_1.ApiQuery)({ name: "search_by", enum: ProductService_1.SearchByToColumn }),
    (0, swagger_1.ApiQuery)({ name: "order_by", enum: ProductService_1.OrderBy }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: [ProductModel_1.ProductModel],
        description: 'Retorna uma lista de investimentos ordenados por um atributo em ordem crescente ou descrescente'
    }),
    (0, common_1.Get)('products/ordenation'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)("search_by")),
    __param(2, (0, common_1.Query)("order_by")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getOrderByProduct", null);
__decorate([
    (0, swagger_1.ApiQuery)({ name: "filter_by", enum: ProductService_1.SearchByToColumn }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        type: [ProductModel_1.ProductModel],
        description: 'Retorna uma lista de investimentos com os valores passados no filtro'
    }),
    (0, common_1.Get)('products/filter'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)("filter_by")),
    __param(2, (0, common_1.Query)("value")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getFilterProducts", null);
exports.ProductController = ProductController = __decorate([
    (0, swagger_1.ApiTags)('products'),
    (0, common_1.Controller)({
        version: '1'
    }),
    __metadata("design:paramtypes", [ProductService_1.ProductService])
], ProductController);
//# sourceMappingURL=ProductController.js.map