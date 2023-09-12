import { DailyLiquidity, StatusCode } from "src/models/product/ProductModel";
export declare class ProductAddDTO {
    readonly name: string;
    readonly status: StatusCode;
    readonly destination: string;
    readonly profitabilityRate: number;
    readonly time: number;
    readonly dueDate: Date;
    readonly dailyLiquidity: DailyLiquidity;
    readonly administrationFee: number;
}
