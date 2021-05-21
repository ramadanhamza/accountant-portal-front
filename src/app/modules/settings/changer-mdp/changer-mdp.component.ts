import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../controller/service/admin.service';
import {Client} from '../../../controller/model/client.model';
import {Admin} from '../../../controller/model/admin.model';
import {Post} from '../../../controller/model/post.model';

@Component({
  selector: 'app-changer-mdp',
  templateUrl: './changer-mdp.component.html',
  styleUrls: ['./changer-mdp.component.css']
})
export class ChangerMdpComponent implements OnInit {

  get admin(): Admin {
    return this.adminService.admin;
  }

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
  }

  edit() {
    this.adminService.edit();
  }

}
