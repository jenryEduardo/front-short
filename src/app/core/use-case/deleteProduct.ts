import { Observable } from "rxjs";
import { ProductRepository } from "../../data/repository/product-repo";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DeleteProduct {
  constructor(private repo:ProductRepository){}
  Execute(name:string):Observable<void>{
    return this.repo.deleteProduct(name)
  }
}
