import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../core/models/Product';
import { ProductRepository } from '../repository/product-repo';

@Injectable({
  providedIn: 'root'
})
export class ProductServices extends ProductRepository{



  constructor(private http : HttpClient) {
    super()
   }

   override getProducts(): Observable<Product[]> {
     return this.http.get<Product[]>(" http://localhost:8080/products")
   }

   override saveProduct(product: Product): Observable<Product> {
     return this.http.post<Product>("http://localhost:8080/products",product)
   }

   override deleteProduct(name:string): Observable<void> {
     return this.http.delete<void>(`http://localhost:8080/products/${name}`)
   }

   override updateProduct(id: number, producto: Product): Observable<void> {
     return this.http.put<void>(`http://localhost:8080/products/${id}`,producto)
   }

}
