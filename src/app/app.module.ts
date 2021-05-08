import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {EditorModule} from 'primeng/editor';
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
import {FormsModule} from '@angular/forms';
import { PostulationListComponent } from './modules/postulations/postulation-list/postulation-list.component';
import { PostulationsComponent } from './modules/postulations/postulations.component';
import { FooterComponent } from './footer/footer.component';
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
import { PostulationCreateComponent } from './modules/postulations/postulation-create/postulation-create.component';
import { PostCreateComponent } from './modules/post-create/post-create.component';
import { PostListComponent } from './modules/post-create/post-list/post-list.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PostListClientComponent } from './modules/post-create/post-list-client/post-list-client.component';
import { PostListHomeComponent } from './modules/post-create/post-list-home/post-list-home.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {HeaderComponent} from './shared/components/header/header.component';

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
    PostulationListComponent,
    PostulationsComponent,
    FooterComponent,
    MainComponent,
    NavbarComponent,
    MastheadComponent,
    NewsletterComponent,
    PostsComponent,
    SponsorshipsComponent,
    ContactCreateComponent,
    RdvCreateComponent,
    PostulationCreateComponent,
    PostCreateComponent,
    PostListComponent,
    PostListClientComponent,
    PostListHomeComponent,
    LoginComponent,
    LogoutComponent
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
      MatCardModule,
      MatDividerModule,
      MatFormFieldModule,
      EditorModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyC4iUno5RgmQkuIOC0jP1DSLNIi_O4gX7Y'
      }),
      NgbModule
    ],
  providers: [{provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
