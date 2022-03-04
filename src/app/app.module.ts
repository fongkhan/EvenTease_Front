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
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { EventPublicComponent } from './event-public/event-public.component';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { ProfilPersoComponent } from './profil-perso/profil-perso.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { ListeAchatCreationComponent } from './liste-achat-creation/liste-achat-creation.component';
import { FriendrequestComponent } from './friendrequest/friendrequest.component';
import {MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { EditMyEventComponent } from './edit-my-event/edit-my-event.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AllMyEventsComponent } from './all-my-events/all-my-events.component';
import { AllMyTeamsComponent } from './all-my-teams/all-my-teams.component';
import { AddParticipantEventComponent } from './add-participant-event/add-participant-event.component';
import { TeamPageComponent } from './team-page/team-page.component';

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
    ListeAchatCreationComponent,
    FriendrequestComponent,
    EditMyEventComponent,
    AllMyEventsComponent,
    AllMyTeamsComponent,
    AddParticipantEventComponent,
    TeamPageComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MultiSelectAllModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
