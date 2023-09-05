import { ApiProperty } from "@nestjs/swagger";
import { DailyLiquidity, StatusCode } from "src/models/product/ProductModel";

export class ProductAddDTO {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly status: StatusCode;

    @ApiProperty()
    readonly destination: string;

    @ApiProperty()
    readonly profitabilityRate: number;

    @ApiProperty()
    readonly time: number;

    @ApiProperty()
    readonly dueDate: Date;

    @ApiProperty()
    readonly dailyLiquidity: DailyLiquidity;

    @ApiProperty()
    readonly administrationFee: number;
  }