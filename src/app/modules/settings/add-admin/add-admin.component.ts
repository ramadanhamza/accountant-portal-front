import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../../controller/service/contact.service';
import {AdminService} from '../../../controller/service/admin.service';
import {Contact} from '../../../controller/model/contact.model';
import {Admin} from '../../../controller/model/admin.model';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.admin = null;
  }

  get admin(): Admin {
    return this.adminService.admin;
  }

  public save() {
    return this.adminService.save();
  }

}
