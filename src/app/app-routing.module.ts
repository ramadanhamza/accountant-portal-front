import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {ClientsComponent} from './modules/clients/clients.component';
import {RdvsComponent} from './modules/rdvs/rdvs.component';
import {AdminComponent} from './layouts/admin/admin.component';
import {PostulantsComponent} from './modules/postulants/postulants.component';
import {MainComponent} from './main/main.component';
import {ContactCreateComponent} from './modules/contacts/contact-create/contact-create.component';
import {ContactListComponent} from './modules/contacts/contact-list/contact-list.component';
import {RdvCreateComponent} from './modules/rdvs/rdv-create/rdv-create.component';
import {RdvListComponent} from './modules/rdvs/rdv-list/rdv-list.component';

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
      path: 'postulants',
      component: PostulantsComponent
    }]
  }]
}, {
  path: '',
  component: MainComponent
}, {
  path: 'contact',
  component: ContactCreateComponent
}, {
  path: 'rdv',
  component: RdvCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
