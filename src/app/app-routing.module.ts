import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {ClientsComponent} from './modules/clients/clients.component';
import {MainComponent} from './main/main.component';
import {ContactCreateComponent} from './modules/contacts/contact-create/contact-create.component';
import {ContactListComponent} from './modules/contacts/contact-list/contact-list.component';
import {RdvCreateComponent} from './modules/rdvs/rdv-create/rdv-create.component';
import {RdvListComponent} from './modules/rdvs/rdv-list/rdv-list.component';
import { PostulationListComponent } from './modules/postulations/postulation-list/postulation-list.component';
import { PostulationCreateComponent } from './modules/postulations/postulation-create/postulation-create.component';
import {AuthGuardService} from './controller/service/auth-guard.service';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {PostListComponent} from './modules/posts/post-list/post-list.component';
import {PostCreateComponent} from './modules/posts/post-create/post-create.component';
import {PostListClientComponent} from './modules/posts/post-list-client/post-list-client.component';

const routes: Routes = [{
  path: 'admin',
  component: LoginComponent,
  }, {
  path: 'logout',
  component: LogoutComponent,
  canActivate: [AuthGuardService]
  }, {
  path: 'admin/dashboard',
  component: DefaultComponent,
  canActivate: [AuthGuardService],
  children: [{
    path: '',
    component: ClientsComponent
    }, {
      path: 'rdvs',
      component: RdvListComponent
    }, {
      path: 'contacts',
      component: ContactListComponent
    }, {
      path: 'postulations',
      component: PostulationListComponent
    }, {
      path: 'postCreate',
      component: PostCreateComponent
    }, {
      path: 'postList',
      component: PostListComponent
    }]
  }, {
  path: '',
  component: MainComponent
  }, {
    path: 'contact',
    component: ContactCreateComponent
  }, {
    path: 'join',
    component: PostulationCreateComponent
  }, {
    path: 'rdv',
    component: RdvCreateComponent
  }, {
    path: 'postListClient',
    component: PostListClientComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
