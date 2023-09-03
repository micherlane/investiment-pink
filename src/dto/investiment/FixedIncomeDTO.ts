import { DailyLiquidity, StatusCode } from "src/models/investiment/FixedIncomeModel";

export class FixedIncomeAddDTO {
    name: string;
    status: StatusCode;
    destination: string;
    profitabilityRate: number;
    time: number;
    dueDate: Date;
    dailyLiquidity: DailyLiquidity;
    administrationFee: number;
  }