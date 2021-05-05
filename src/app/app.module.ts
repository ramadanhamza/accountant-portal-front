import {LOCALE_ID, NgModule} from '@angular/core';
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
import { FooterComponent } from './footer/footer.component';
import { GridComponent } from './grid/grid.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MastheadComponent } from './masthead/masthead.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { PostsComponent } from './posts/posts.component';
import { SponsorshipsComponent } from './sponsorships/sponsorships.component';
import { ContactCreateComponent } from './modules/contacts/contact-create/contact-create.component';
import {AgmCoreModule} from '@agm/core';
import { RdvCreateComponent } from './modules/rdvs/rdv-create/rdv-create.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

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
    PostulationsComponent,
    FooterComponent,
    GridComponent,
    MainComponent,
    NavbarComponent,
    MastheadComponent,
    NewsletterComponent,
    PostsComponent,
    SponsorshipsComponent,
    ContactCreateComponent,
    RdvCreateComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      DefaultModule,
      HttpClientModule,
      FormsModule,
      AgmCoreModule,
      BrowserModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyC4iUno5RgmQkuIOC0jP1DSLNIi_O4gX7Y'
      }),
      NgbModule
    ],
  providers: [{provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
