import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {component: ConnexionComponent, path:"login"},
  {component: HomeComponent, path:"home"},
  {component: HelpComponent, path:"help"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
