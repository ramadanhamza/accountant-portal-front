import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {ClientsComponent} from './modules/clients/clients.component';
import {AdminComponent} from './layouts/admin/admin.component';
import {MainComponent} from './main/main.component';
import {ContactCreateComponent} from './modules/contacts/contact-create/contact-create.component';
import {ContactListComponent} from './modules/contacts/contact-list/contact-list.component';
import {RdvCreateComponent} from './modules/rdvs/rdv-create/rdv-create.component';
import {RdvListComponent} from './modules/rdvs/rdv-list/rdv-list.component';
import { PostulationListComponent } from './modules/postulations/postulation-list/postulation-list.component';
import { PostulationCreateComponent } from './modules/postulations/postulation-create/postulation-create.component';
import { PostCreateComponent } from './modules/post-create/post-create.component';
import { PostListComponent } from './modules/post-create/post-list/post-list.component';
import {PostListClientComponent} from './modules/post-create/post-list-client/post-list-client.component';

const routes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  children: [{
    path: 'dashboard',
    component: DefaultComponent,
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
