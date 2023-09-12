import { ProductAddDTO } from 'src/dto/product/ProductAddDTO';
import { ProductModel } from '../../models/product/ProductModel';
export declare enum SearchByToColumn {
    name = "name",
    status = "status",
    destination = "destination",
    profitabilityRate = "profitabilityRate",
    time = "time",
    dueDate = "dueDate",
    dailyLiquidity = "dailyLiquidity",
    administrationFee = "administrationFee"
}
export declare enum OrderBy {
    ASC = "asc",
    DESC = "desc"
}
declare class ProductService {
    private _listProducts;
    addProduct({ name, status, destination, profitabilityRate, time, dueDate, dailyLiquidity, administrationFee, }: ProductAddDTO): Promise<ProductModel>;
    removeProduct(id: string): Promise<void>;
    getAllProducts(): Promise<ProductModel[]>;
    changeStatusProduct(id: string): Promise<ProductModel>;
    getDetails(id: string): Promise<ProductModel>;
    getOrdemProducts(property: SearchByToColumn, ordem: string): Promise<ProductModel[]>;
    getFilterProducts(property: SearchByToColumn, value: string): Promise<ProductModel[]>;
}
export { ProductService };
