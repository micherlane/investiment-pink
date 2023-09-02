import {
  DailyLiquidity,
  FixedIncomeModel,
  StatusCode,
} from '../../models/investiment/FixedIncomeModel';

import { v4 as uuidv4 } from 'uuid';

interface AddFixedIncomeRequest {
  name: string;
  status: StatusCode;
  destination: string;
  profitabilityRate: number;
  time: number;
  dueDate: Date;
  dailyLiquidity: DailyLiquidity;
  administrationFee: number;
}

class FixedIncomeService {
  private _listFixedIncomes: Array<FixedIncomeModel> = [];

  async addFixedIncome({
    name,
    status,
    destination,
    profitabilityRate,
    time,
    dueDate,
    dailyLiquidity,
    administrationFee,
  }: AddFixedIncomeRequest) {
    const id = uuidv4();
    const fixedIncome = new FixedIncomeModel(
      id,
      name,
      status,
      destination,
      profitabilityRate,
      time,
      dueDate,
      dailyLiquidity,
      administrationFee,
    );
    console.log(fixedIncome.toJSON());

    this._listFixedIncomes.push(fixedIncome);
    return fixedIncome;
  }

  async removeFixedIncome(id: string) {
    this._listFixedIncomes = this._listFixedIncomes.filter(
      (fixedIncome) => fixedIncome.id !== id,
    );
  }

  async getAllFixedIncomes() {
    return this._listFixedIncomes;
  }

  async changeStatus(id: string) {
    let fixedIncomeFounded;
    this._listFixedIncomes.forEach((fixedIncome) => {
      if (fixedIncome.id === id) {
        if (fixedIncome.status === StatusCode.available) {
          fixedIncome.status = StatusCode.unavailable;
        } else {
          fixedIncome.status = StatusCode.available;
        }
        fixedIncomeFounded = fixedIncome;
      }
    });
    return fixedIncomeFounded;
  }
}

export { FixedIncomeService };
