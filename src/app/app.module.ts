import { PostCreateComponent } from './modules/post-create/post-create.component';
import { PostListComponent } from './modules/post-create/post-list/post-list.component';
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
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { PostulationListComponent } from './modules/postulations/postulation-list/postulation-list.component';
import { PostulationsComponent } from './modules/postulations/postulations.component';
import { FateModule, FateMaterialModule } from 'fate-editor';


import {MatFormFieldModule} from '@angular/material/form-field';

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
    PostulationListComponent,
    PostulationsComponent,
    PostCreateComponent,
    PostListComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    HttpClientModule,
    FormsModule,
    FateModule,
    FateMaterialModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
