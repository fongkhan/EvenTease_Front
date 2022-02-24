import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
const routes: Routes = [
  {component: ConnexionComponent, path:"login"},
  {component: ForgotPasswordComponent, path:"forgot-password"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
