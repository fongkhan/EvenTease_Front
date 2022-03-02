import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { EmailValidationComponent } from './email-validation/email-validation.component';
import { AuthUserHomeComponent } from './auth-user-home/auth-user-home.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { EventPublicComponent } from './event-public/event-public.component';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { ProfilPersoComponent } from './profil-perso/profil-perso.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { EditMyEventComponent } from './edit-my-event/edit-my-event.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    EmailValidationComponent,
    AuthUserHomeComponent,
    HomeComponent,
    EventPublicComponent,
    EventCreationComponent,
    ProfilPersoComponent,
    EditProfilComponent,
    DeleteEventComponent,
    DeleteConfirmationComponent,
    CreateGroupComponent,
<<<<<<< HEAD

=======
    EditMyEventComponent,
>>>>>>> b11c18228fcefded0cca8c1d60fcf223f9f73c98
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
