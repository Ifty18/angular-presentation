import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { FakeStoreComponent } from './pages/fake-store/fake-store.component';
import { loginGuard } from './guards/login.guard';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: LandingPageComponent }, 
  { path: 'forbidden', component: ForbiddenComponent, canActivate:[loginGuard]},
  { path: 'fake-store', component: FakeStoreComponent },
  { path: 'local-store', loadChildren: () => import('./pages/local-store/local-store.module').then(m => m.LocalStoreModule) },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
