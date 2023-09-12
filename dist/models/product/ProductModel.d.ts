export declare enum StatusCode {
    available = "dispon\u00EDvel",
    unavailable = "indispon\u00EDvel"
}
export declare enum DailyLiquidity {
    sim = "sim",
    nao = "n\u00E3o"
}
declare class ProductModel {
    private _id;
    private _name;
    private _status;
    private _destination;
    private _profitabilityRate;
    private _time;
    private _dueDate;
    private _dailyLiquidity;
    private _administrationFee;
    constructor(id: string, name: string, status: StatusCode, destination: string, profitabilityRate: number, time: number, dueDate: Date, dailyLiquidity: DailyLiquidity, administrationFee: number);
    get id(): string;
    set id(value: string);
    get name(): string;
    set name(value: string);
    get status(): StatusCode;
    set status(value: StatusCode);
    get destination(): string;
    set destination(value: string);
    get profitabilityRate(): number;
    set profitabilityRate(value: number);
    get time(): number;
    set time(value: number);
    get administrationFee(): number;
    set administrationFee(value: number);
    get dueDate(): Date;
    set dueDate(value: Date);
    get dailyLiquidity(): DailyLiquidity;
    set dailyLiquidity(value: DailyLiquidity);
    toJSON(): {
        id: string;
        name: string;
        status: StatusCode;
        destination: string;
        profitabilityRate: number;
        time: number;
        dueDate: Date;
        dailyLiquidity: DailyLiquidity;
        administrationFee: number;
    };
}
export { ProductModel };
