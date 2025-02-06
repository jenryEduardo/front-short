import { Component } from '@angular/core';
import { getProductsUseCase } from '../../../core/use-case/product-use-case';
import { Product } from '../../../core/models/Product';
import { DeleteProduct } from '../../../core/use-case/deleteProduct';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {

  products:Product[]=[]
    constructor(private useCase:getProductsUseCase,private usc : DeleteProduct){}

    ngOnInit(): void {
      this.useCase.execute().subscribe((data)=>{
        this.products=data
        console.log(this.products);
      })
    }

    actualizarProducto(id: number) {

    }

    eliminarProducto(name:string) {
        this.usc.Execute(name).subscribe(()=>{
          alert("producto eliminado")
        })
    }
}
