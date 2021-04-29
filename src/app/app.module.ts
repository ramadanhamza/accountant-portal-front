import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DefaultModule} from './layouts/default/default.module';
import { ClientsComponent } from './modules/clients/clients.component';
import { ClientListComponent } from './modules/clients/client-list/client-list.component';
import {HttpClientModule} from '@angular/common/http';
import { RdvsComponent } from './modules/rdvs/rdvs.component';
import { RdvListComponent } from './modules/rdvs/rdv-list/rdv-list.component';
import { ContactListComponent } from './modules/contacts/contact-list/contact-list.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { AdminComponent } from './layouts/admin/admin.component';
import {FormsModule} from '@angular/forms';
import { PostulantsComponent } from './modules/postulants/postulants.component';
import { PostulantListComponent } from './modules/postulants/postulant-list/postulant-list.component';
import { PostulationListComponent } from './modules/postulations/postulation-list/postulation-list.component';
import { PostulationsComponent } from './modules/postulations/postulations.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientListComponent,
    RdvsComponent,
    RdvListComponent,
    ContactListComponent,
    ContactsComponent,
    AdminComponent,
    PostulantsComponent,
    PostulantListComponent,
    PostulationListComponent,
    PostulationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
