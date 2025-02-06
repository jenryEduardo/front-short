import { Injectable } from '@angular/core';
import { ProductRepository } from '../../data/repository/product-repo';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class saveProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  execute(product:Product): Observable<Product> {
    return this.productRepository.saveProduct(product);
  }
}
