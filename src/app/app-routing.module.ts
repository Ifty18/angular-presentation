import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { FakeStoreComponent } from './pages/fake-store/fake-store.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent }, 
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'fake-store', component: FakeStoreComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
