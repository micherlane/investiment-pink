import {
  FixedIncomeModel,
  StatusCode,
} from '../../models/investiment/FixedIncomeModel';

interface AddFixedIncomeRequest {
  id: string;
  name: string;
  status: StatusCode;
  destination: string;
  profitabilityRate: number;
  time: number;
  administrationFee: number;
}

class FixedIncomeService {
  private _listFixedIncomes: Array<FixedIncomeModel> = [];

  async addFixedIncome({
    id,
    name,
    status,
    destination,
    profitabilityRate,
    time,
    administrationFee,
  }: AddFixedIncomeRequest) {
    const fixedIncome = new FixedIncomeModel(
      id,
      name,
      status,
      destination,
      profitabilityRate,
      time,
      administrationFee,
    );

    this._listFixedIncomes.push(fixedIncome);
    return fixedIncome;
  }

  async removeFixedIncome(id: string) {
    this._listFixedIncomes = this._listFixedIncomes.filter(
      (fixedIncome) => fixedIncome.id !== id,
    );
  }

  async getListFixedIncomes() {
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
