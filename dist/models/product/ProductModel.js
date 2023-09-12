"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = exports.DailyLiquidity = exports.StatusCode = void 0;
const swagger_1 = require("@nestjs/swagger");
var StatusCode;
(function (StatusCode) {
    StatusCode["available"] = "dispon\u00EDvel";
    StatusCode["unavailable"] = "indispon\u00EDvel";
})(StatusCode || (exports.StatusCode = StatusCode = {}));
var DailyLiquidity;
(function (DailyLiquidity) {
    DailyLiquidity["sim"] = "sim";
    DailyLiquidity["nao"] = "n\u00E3o";
})(DailyLiquidity || (exports.DailyLiquidity = DailyLiquidity = {}));
class ProductModel {
    constructor(id, name, status, destination, profitabilityRate, time, dueDate, dailyLiquidity, administrationFee) {
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
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get destination() {
        return this._destination;
    }
    set destination(value) {
        this._destination = value;
    }
    get profitabilityRate() {
        return this._profitabilityRate;
    }
    set profitabilityRate(value) {
        this._profitabilityRate = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
    }
    get administrationFee() {
        return this._administrationFee;
    }
    set administrationFee(value) {
        this._administrationFee = value;
    }
    get dueDate() {
        return this._dueDate;
    }
    set dueDate(value) {
        this._dueDate = value;
    }
    get dailyLiquidity() {
        return this._dailyLiquidity;
    }
    set dailyLiquidity(value) {
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
exports.ProductModel = ProductModel;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ProductModel.prototype, "id", null);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ProductModel.prototype, "name", null);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ProductModel.prototype, "status", null);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ProductModel.prototype, "destination", null);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ProductModel.prototype, "profitabilityRate", null);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ProductModel.prototype, "time", null);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ProductModel.prototype, "administrationFee", null);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [Date])
], ProductModel.prototype, "dueDate", null);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ProductModel.prototype, "dailyLiquidity", null);
//# sourceMappingURL=ProductModel.js.map