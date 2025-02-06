import { Injectable } from '@angular/core';
import { ProductRepository } from '../../data/repository/product-repo';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class getProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  execute(): Observable<Product[]> {
    return this.productRepository.getProducts()
  }
}
