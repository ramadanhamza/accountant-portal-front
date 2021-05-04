import { PostListComponent } from './modules/post-create/post-list/post-list.component';
import { PostCreateComponent } from './modules/post-create/post-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {ClientsComponent} from './modules/clients/clients.component';
import {RdvsComponent} from './modules/rdvs/rdvs.component';
import {ContactsComponent} from './modules/contacts/contacts.component';
import {AdminComponent} from './layouts/admin/admin.component';
import { PostulationsComponent } from './modules/postulations/postulations.component';

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
      component: RdvsComponent
    }, {
      path: 'contacts',
      component: ContactsComponent
    }, {
      path: 'postulations',
      component: PostulationsComponent
    },
    {
      path: 'postCreate',
      component: PostCreateComponent
    },
    {
      path: 'postList',
      component: PostListComponent
    }


  ]
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
