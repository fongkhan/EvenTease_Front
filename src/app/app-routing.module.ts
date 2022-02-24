import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { EmailValidationComponent } from './email-validation/email-validation.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {component: ConnexionComponent, path:"login"},
  {component: ForgotPasswordComponent, path:"forgot-password"},
  {component: RegisterComponent, path:"register"},
  {component: EmailValidationComponent, path:"email-validation"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
