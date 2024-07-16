import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterModule } from './register/register.module';
import { FakeStoreModule } from './fake-store/fake-store.module';
import { ForbiddenModule } from './forbidden/forbidden.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { UnauthorizedModule } from './unauthorized/unauthorized.module';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    RegisterModule,
    FakeStoreModule,
    ForbiddenModule,
    LandingPageModule,
    UnauthorizedModule
  ]
})
export class PagesModule { }
