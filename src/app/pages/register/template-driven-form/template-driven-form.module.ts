import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormComponent } from './template-driven-form.component';

@NgModule({
  declarations: [TemplateDrivenFormComponent],
  imports: [
    CommonModule
  ],
  exports:[TemplateDrivenFormComponent]
})
export class TemplateDrivenFormModule { }
