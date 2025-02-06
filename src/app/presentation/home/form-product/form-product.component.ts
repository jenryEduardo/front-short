import { Component } from '@angular/core';
import { saveProductsUseCase } from '../../../core/use-case/creataProduct';
import { Product } from '../../../core/models/Product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {
producto:Product = {Id:0,Nombre:"",Precio:0}

constructor(private usecase : saveProductsUseCase){}

agregarProducto(){
  this.usecase.execute(this.producto).subscribe(()=>{
    console.log("umm parece que ok");
  })
}
}
