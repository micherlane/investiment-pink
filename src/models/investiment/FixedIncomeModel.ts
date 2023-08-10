export enum StatusCode {
  available,
  unavailable,
}

class FixedIncomeModel {
  private _id: string;
  private _name: string;
  private _status: StatusCode;
  private _destination: string;
  private _profitabilityRate: number;
  private _time: number;
  private _administrationFee: number;

  constructor(
    id: string,
    name: string,
    status: StatusCode,
    destination: string,
    profitabilityRate: number,
    time: number,
    administrationFee: number,
  ) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.destination = destination;
    this.profitabilityRate = profitabilityRate;
    this.time = time;
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
}

export { FixedIncomeModel };
