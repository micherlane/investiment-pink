import { ProductAddDTO } from 'src/dto/product/ProductAddDTO';
import {
  ProductModel,
  StatusCode,
} from '../../models/product/ProductModel';

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

export enum OrderBy {
  ASC = "asc",
  DESC = "desc",
}

class ProductService {
  private _listProducts: Array<ProductModel> = [];

  async addProduct({
    name,
    status,
    destination,
    profitabilityRate,
    time,
    dueDate,
    dailyLiquidity,
    administrationFee,
  }: ProductAddDTO) {
    const id = uuidv4();
    const Product = new ProductModel(
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

    this._listProducts.push(Product);
    return Product;
  }

  async removeProduct(id: string) {
    this._listProducts = this._listProducts.filter(
      (product) => product.id !== id,
    );
  }

  async getAllProducts() {
    return this._listProducts;
  }

  async changeStatusProduct(id: string) {
    let productFounded: ProductModel;
    this._listProducts.forEach((product) => {
      if (product.id === id) {
        if (product.status === StatusCode.available) {
          product.status = StatusCode.unavailable;
        } else {
          product.status = StatusCode.available;
        }
        productFounded = product;
      }
    });

    return productFounded;
  }

  async getDetails(id: string) {
    let productFounded: ProductModel;
    this._listProducts.forEach((product) => {
      if (product.id === id) {
        productFounded = product;
      }
    });

    return productFounded;
  }

  async getOrdemProducts(property: SearchByToColumn, ordem: string) {

    let value1 = 1;
    let value2 = -1;

    if (ordem === OrderBy.DESC) {
      value1 = -1;
      value2 = 1;
    }

    let sortedList = this._listProducts.sort((a, b) => {
      if (a[property] > b[property]) {
        return value1;
      } else if (a[property] < b[property]) {
        return value2;
      }
      return 0;
    });

    return sortedList;
  }

  async getFilterProducts(property: SearchByToColumn, value: string){
    return this._listProducts.filter((product) => product[property] === value);
  }
}

export { ProductService };
