import { ProductAddDTO } from 'src/dto/product/ProductAddDTO';
import { OrderBy, ProductService, SearchByToColumn } from '../../services/product/ProductService';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getListProducts(res: any): Promise<any>;
    addProducts(res: any, data: ProductAddDTO): Promise<void>;
    updateStatusProduct(res: any, id: string): Promise<any>;
    deleteProducts(res: any, id: string): Promise<any>;
    getDetailsProduct(res: any, id: string): Promise<any>;
    getOrderByProduct(res: any, search_by: SearchByToColumn, order_by: OrderBy): Promise<any>;
    getFilterProducts(res: any, filter_by: SearchByToColumn, value: string): Promise<void>;
}
