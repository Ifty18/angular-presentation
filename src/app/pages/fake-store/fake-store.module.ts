import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeStoreComponent } from './fake-store.component';

@NgModule({
  declarations: [FakeStoreComponent],
  imports: [
    CommonModule
  ],
  exports:[FakeStoreComponent]
})
export class FakeStoreModule { }
