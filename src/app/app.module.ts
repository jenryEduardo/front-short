import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './presentation/home/list-products/list-products.component';
import { FormProductComponent } from './presentation/home/form-product/form-product.component';
import { ProductRepository } from './data/repository/product-repo';
import { ProductServices } from './data/sources/product-services.service';
import { provideHttpClient, withFetch } from '@angular/common/http'; // 🔹 Importa correctamente
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    FormProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),  // 🔹 Añadir esta línea correctamente
    { provide: ProductRepository, useClass: ProductServices }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
