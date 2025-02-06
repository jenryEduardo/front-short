import { Observable } from "rxjs";
import { ProductRepository } from "../../data/repository/product-repo";
import { Product } from "../models/Product";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class UpdateUseCaseProduct{
  constructor(private repo: ProductRepository){}

  Execute(id:number,product:Product):Observable<void>{
      return this.repo.updateProduct(id,product)
  }
}
