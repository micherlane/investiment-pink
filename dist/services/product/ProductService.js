"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = exports.OrderBy = exports.SearchByToColumn = void 0;
const ProductModel_1 = require("../../models/product/ProductModel");
const uuid_1 = require("uuid");
var SearchByToColumn;
(function (SearchByToColumn) {
    SearchByToColumn["name"] = "name";
    SearchByToColumn["status"] = "status";
    SearchByToColumn["destination"] = "destination";
    SearchByToColumn["profitabilityRate"] = "profitabilityRate";
    SearchByToColumn["time"] = "time";
    SearchByToColumn["dueDate"] = "dueDate";
    SearchByToColumn["dailyLiquidity"] = "dailyLiquidity";
    SearchByToColumn["administrationFee"] = "administrationFee";
})(SearchByToColumn || (exports.SearchByToColumn = SearchByToColumn = {}));
;
var OrderBy;
(function (OrderBy) {
    OrderBy["ASC"] = "asc";
    OrderBy["DESC"] = "desc";
})(OrderBy || (exports.OrderBy = OrderBy = {}));
class ProductService {
    constructor() {
        this._listProducts = [];
    }
    async addProduct({ name, status, destination, profitabilityRate, time, dueDate, dailyLiquidity, administrationFee, }) {
        const id = (0, uuid_1.v4)();
        const Product = new ProductModel_1.ProductModel(id, name, status, destination, profitabilityRate, time, dueDate, dailyLiquidity, administrationFee);
        this._listProducts.push(Product);
        return Product;
    }
    async removeProduct(id) {
        this._listProducts = this._listProducts.filter((product) => product.id !== id);
    }
    async getAllProducts() {
        return this._listProducts;
    }
    async changeStatusProduct(id) {
        let productFounded;
        this._listProducts.forEach((product) => {
            if (product.id === id) {
                if (product.status === ProductModel_1.StatusCode.available) {
                    product.status = ProductModel_1.StatusCode.unavailable;
                }
                else {
                    product.status = ProductModel_1.StatusCode.available;
                }
                productFounded = product;
            }
        });
        return productFounded;
    }
    async getDetails(id) {
        let productFounded;
        this._listProducts.forEach((product) => {
            if (product.id === id) {
                productFounded = product;
            }
        });
        return productFounded;
    }
    async getOrdemProducts(property, ordem) {
        let value1 = 1;
        let value2 = -1;
        if (ordem === OrderBy.DESC) {
            value1 = -1;
            value2 = 1;
        }
        let sortedList = this._listProducts.sort((a, b) => {
            if (a[property] > b[property]) {
                return value1;
            }
            else if (a[property] < b[property]) {
                return value2;
            }
            return 0;
        });
        return sortedList;
    }
    async getFilterProducts(property, value) {
        return this._listProducts.filter((product) => product[property] === value);
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map