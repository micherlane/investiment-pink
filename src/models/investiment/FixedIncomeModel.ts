export enum StatusCode {
  available = 'disponível',
  unavailable = 'indisponível',
}

export enum DailyLiquidity {
  sim = 'sim',
  nao = 'não',
}

class FixedIncomeModel {
  private _id: string;
  private _name: string;
  private _status: StatusCode;
  private _destination: string;
  private _profitabilityRate: number;
  private _time: number;
  private _dueDate: Date;
  private _dailyLiquidity: DailyLiquidity;
  private _administrationFee: number;

  constructor(
    id: string,
    name: string,
    status: StatusCode,
    destination: string,
    profitabilityRate: number,
    time: number,
    dueDate: Date,
    dailyLiquidity: DailyLiquidity,
    administrationFee: number,
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.destination = destination;
    this.profitabilityRate = profitabilityRate;
    this.time = time;
    this._dueDate = dueDate;
    this._dailyLiquidity = dailyLiquidity;
    this.administrationFee = administrationFee;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get status(): StatusCode {
    return this._status;
  }

  set status(value: StatusCode) {
    this._status = value;
  }
  get destination(): string {
    return this._destination;
  }

  set destination(value: string) {
    this._destination = value;
  }

  get profitabilityRate(): number {
    return this._profitabilityRate;
  }

  set profitabilityRate(value: number) {
    this._profitabilityRate = value;
  }

  get time(): number {
    return this._time;
  }

  set time(value: number) {
    this._time = value;
  }

  get administrationFee(): number {
    return this._administrationFee;
  }

  set administrationFee(value: number) {
    this._administrationFee = value;
  }

  get dueDate(): Date {
    return this._dueDate;
  }

  set dueDate(value: Date) {
    this._dueDate = value;
  }

  get dailyLiquidity(): DailyLiquidity {
    return this._dailyLiquidity;
  }

  set dailyLiquidity(value: DailyLiquidity) {
    this._dailyLiquidity = value;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      status: this.status,
      destination: this.destination,
      profitabilityRate: this.profitabilityRate,
      time: this.time,
      dueDate: this.dueDate,
      dailyLiquidity: this.dailyLiquidity,
      administrationFee: this.administrationFee,
    };
  }
}

export { FixedIncomeModel };
