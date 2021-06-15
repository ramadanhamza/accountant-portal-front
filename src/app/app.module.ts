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
import { RdvListComponent, ResponseMessage } from './modules/rdvs/rdv-list/rdv-list.component';
import { ContactListComponent, ContactMessage } from './modules/contacts/contact-list/contact-list.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import {FormsModule} from '@angular/forms';
import { PostulationListComponent , PostulationMessage} from './modules/postulations/postulation-list/postulation-list.component';
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
import {CommonModule, registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostulationCreateComponent } from './modules/postulations/postulation-create/postulation-create.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {PostCreateComponent} from './modules/posts/post-create/post-create.component';
import {PostListComponent} from './modules/posts/post-list/post-list.component';
import {PostListClientComponent} from './modules/posts/post-list-client/post-list-client.component';
import {PostListHomeComponent} from './modules/posts/post-list-home/post-list-home.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { SimpleMessageComponent } from './modules/simple-message/simple-message.component';
import { NewsletterMessageComponent } from './modules/simple-message/newsletter-message/newsletter-message.component';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AdminComponent } from './admin/admin.component';
import {AuthGuard} from './auth.guard';
import { LogoutComponent } from './logout/logout.component';

import {MatIconModule} from '@angular/material/icon';
import { ArticleComponent } from './article/article.component';

import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { PostDetailComponent } from './post-detail/post-detail.component';
import {ChangerMdpComponent} from './modules/settings/changer-mdp/changer-mdp.component';
import {AddAdminComponent} from './modules/settings/add-admin/add-admin.component';
import {AdminsComponent} from './modules/admins/admins.component';
import {AdminListComponent} from './modules/admins/admin-list/admin-list.component';

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
    LogoutComponent,
    SimpleMessageComponent,
    ResponseMessage,
    NewsletterMessageComponent,
    AdminComponent,
    LogoutComponent,
    PostulationMessage,

    ArticleComponent,
    PostDetailComponent,
    ChangerMdpComponent,
    AddAdminComponent,
    AdminsComponent,
    AdminListComponent,
    ContactMessage



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
      MatToolbarModule,
      EditorModule,
      Ng2SearchPipeModule,
      Ng2OrderModule,
      NgxPaginationModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyC4iUno5RgmQkuIOC0jP1DSLNIi_O4gX7Y'
      }),
      NgbModule,
      MatButtonModule,
      MatDialogModule,
      MatInputModule,
      MatDividerModule,
      MatButtonModule,
      DialogModule,
     ButtonModule,
     MatIconModule,


MatTableModule

    ],
  providers: [{provide: LOCALE_ID, useValue: 'fr' }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
