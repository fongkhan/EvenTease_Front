import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { EmailValidationComponent } from './email-validation/email-validation.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { AuthUserHomeComponent } from './auth-user-home/auth-user-home.component';
import { EventPublicComponent } from './event-public/event-public.component';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { ProfilPersoComponent } from './profil-perso/profil-perso.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { EditMyEventComponent } from './edit-my-event/edit-my-event.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { ListeAchatCreationComponent } from './liste-achat-creation/liste-achat-creation.component';
import { FriendrequestComponent } from './friendrequest/friendrequest.component';
import { AllMyEventsComponent } from './all-my-events/all-my-events.component';
import { AllMyTeamsComponent } from './all-my-teams/all-my-teams.component';
import { AddParticipantEventComponent } from './add-participant-event/add-participant-event.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { VoteCreationComponent } from './vote-creation/vote-creation.component';



const routes: Routes = [
  {component: ConnexionComponent, path:"login"},
  {component: ForgotPasswordComponent, path:"forgot-password"},
  {component: RegisterComponent, path:"register"},
  {component: EmailValidationComponent, path:"email-validation"},
  {component: HomeComponent, path:"home"},
  {component: HelpComponent, path:"help"},
  {component: AuthUserHomeComponent, path:"auth-user-home"},
  {component: EventPublicComponent, path:"event-public"},
  {component: EventCreationComponent, path:"event-creation"},
  {component: ProfilPersoComponent, path:"profil-perso"},
  {component: EditProfilComponent, path:"edit-profil"},
  {component: DeleteEventComponent, path:"delete-event"},
  {component: DeleteConfirmationComponent, path:"delete-confirmation"},
  {component: EditMyEventComponent, path:"edit-my-event"},
  {component: CreateGroupComponent, path:"create-group"},
  {component: ListeAchatCreationComponent, path:"create-shoppinglist"},
  {component: AllMyEventsComponent, path:"all-my-events"},
  {component: AllMyTeamsComponent, path:"all-my-teams"},
  {component: FriendrequestComponent, path:"friendrequest"},
  {component: AddParticipantEventComponent, path:"event/add-participant"},
  {component: VoteCreationComponent, path:"event/add-vote"},
  {component: TeamPageComponent, path:"team-page"},

  {path :'',redirectTo:'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
