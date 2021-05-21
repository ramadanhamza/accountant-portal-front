import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../controller/service/admin.service';
import {Admin} from '../../../controller/model/admin.model';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  p: number = 1;
  recherche: any;

  get admins(): Array<Admin> {
    return this.adminService.admins;
  }

  search() {
    if (this.recherche == "") {
      this.ngOnInit();
    }
    else {
      this.adminService.admins = this.adminService.admins.filter(res => {
        return res.nom.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase())
          || res.prenom.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase())
          || res.login.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase())
          || res.password.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase());
      });
    }
  }

  delete(i) {
    this.adminService.delete(i);
  }

  key: string;
  reverse: boolean = false;

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.findAll();
  }

}
