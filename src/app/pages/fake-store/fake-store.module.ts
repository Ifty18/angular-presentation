import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FakeStoreComponent } from './fake-store.component';
@NgModule({
  declarations: [FakeStoreComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[FakeStoreComponent]
})
export class FakeStoreModule { }
