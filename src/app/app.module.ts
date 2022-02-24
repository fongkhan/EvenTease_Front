import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { EmailValidationComponent } from './email-validation/email-validation.component';
import { AuthUserHomeComponent } from './auth-user-home/auth-user-home.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    EmailValidationComponent,
<<<<<<< HEAD
    AuthUserHomeComponent
=======
    HomeComponent
>>>>>>> 40c50c56f1793191fd90b64299288143f0b651f1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
