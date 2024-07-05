import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { FakeStoreRoutingModule } from './fake-store-routing.module';
import { ProductDetailsComponent } from './store/pages/product-details/product-details.component';
import { StoreProductComponent } from './store/pages/store-product/store-product.component';

@NgModule({
  declarations: [
    StoreComponent,
    StoreProductComponent,
    ProductDetailsComponent,
  ],
  imports: [CommonModule, FakeStoreRoutingModule],
  exports: [],
})
export class FakeStoreModule {}
