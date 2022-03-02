import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { EmailValidationComponent } from './email-validation/email-validation.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { AuthUserHomeComponent } from './auth-user-home/auth-user-home.component';
import { EventPrivateComponent } from './event-private/event-private.component';
import { EventPublicComponent } from './event-public/event-public.component';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { ProfilPersoComponent } from './profil-perso/profil-perso.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { ListeAchatCreationComponent } from './liste-achat-creation/liste-achat-creation.component';
import { FriendrequestComponent } from './friendrequest/friendrequest.component';



const routes: Routes = [
  {component: ConnexionComponent, path:"login"},
  {component: ForgotPasswordComponent, path:"forgot-password"},
  {component: RegisterComponent, path:"register"},
  {component: EmailValidationComponent, path:"email-validation"},
  {component: HomeComponent, path:"home"},
  {component: HelpComponent, path:"help"},
  {component: AuthUserHomeComponent, path:"auth-user-home"},
  {component: EventPrivateComponent, path:"event-private"},
  {component: EventPublicComponent, path:"event-public"},
  {component: EventCreationComponent, path:"event-creation"},
  {component: ProfilPersoComponent, path:"profil-perso"},
  {component: EditProfilComponent, path:"edit-profil"},
  {component: DeleteEventComponent, path:"delete-event"},
  {component: DeleteConfirmationComponent, path:"delete-confirmation"},
  {component: CreateGroupComponent, path:"create-group"},
  {component: ListeAchatCreationComponent, path:"create-shoppinglist"},
  {component: FriendrequestComponent, path:"create-friendrequest"},
  {path :'',redirectTo:'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
