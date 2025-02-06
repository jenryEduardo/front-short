import { Observable } from 'rxjs';
import { Product } from '../../core/models/Product';

export abstract class ProductRepository {
  abstract getProducts(): Observable<Product[]>;
  abstract saveProduct(product:Product):Observable<Product>
  abstract updateProduct(id:number,producto:Product):Observable<void>
  abstract deleteProduct(name:string):Observable<void>
}
