import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './components/views/create/create.component';
import { ConfirmComponent } from './components/views/confirm/confirm.component';
import { ConditionsComponent } from './components/views/conditions/conditions.component';
import { InvitesComponent } from './components/views/invites/invites.component';

const routes: Routes = [{
  path: "",
  component: CreateComponent
},
{
  path: "confirm",
  component: ConfirmComponent
},
{
  path: "conditions",
  component: ConditionsComponent
},
{
  path: "invites",
  component: InvitesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
