import { FixedIncomeAddDTO } from 'src/dto/investiment/FixedIncomeDTO';
import {
  FixedIncomeModel,
  StatusCode,
} from '../../models/investiment/FixedIncomeModel';

import { v4 as uuidv4 } from 'uuid';

export enum SearchByToColumn {
  name = "name",
  status = "status",
  destination = "destination",
  profitabilityRate = "profitabilityRate",
  time = "time",
  dueDate = "dueDate",
  dailyLiquidity = "dailyLiquidity",
  administrationFee = "administrationFee"
};

export enum OrdemBy {
  ASC = "asc",
  DESC = "desc",
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
  }: FixedIncomeAddDTO) {
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

  async getDetails(id: string) {
    let fixedIncomeFounded;
    this._listFixedIncomes.forEach((fixedIncome) => {
      if (fixedIncome.id === id) {
        fixedIncomeFounded = fixedIncome;
      }
    });

    return fixedIncomeFounded;
  }

  async getOrdemFixedIncomes(property: SearchByToColumn, ordem: string) {

    let value1 = 1;
    let value2 = -1;

    if (ordem === OrdemBy.DESC) {
      value1 = -1;
      value2 = 1;
    }

    let listOrdenada = this._listFixedIncomes.sort((a, b) => {
      if (a[property] > b[property]) {
        return value1;
      } else if (a[property] < b[property]) {
        return value2;
      }
      return 0;
    });

    return listOrdenada;
  }

  async getFilterFixedIncomes(property: SearchByToColumn, value: string){
    return this._listFixedIncomes.filter((fixedIncome) => fixedIncome[property] === value);
  }
}

export { FixedIncomeService };
