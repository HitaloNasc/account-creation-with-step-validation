import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/views/create/create.component';
import { ConfirmComponent } from './components/views/confirm/confirm.component';
import { ConditionsComponent } from './components/views/conditions/conditions.component';
import { InvitesComponent } from './components/views/invites/invites.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ConfirmComponent,
    ConditionsComponent,
    InvitesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
