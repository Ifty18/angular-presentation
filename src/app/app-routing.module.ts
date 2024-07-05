import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { FakeStoreComponent } from './pages/fake-store/fake-store.component';
import { loginGuard } from './guards/login.guard';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { RegisterComponent } from './pages/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: LandingPageComponent },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
    canActivate: [loginGuard],
  },
  { path: 'fake-store', component: FakeStoreComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
