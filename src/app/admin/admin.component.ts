import { Component, OnInit } from '@angular/core';
import {AdminService} from '../controller/service/admin.service';
import {Admin} from '../controller/model/admin.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  get admins(): Array<Admin> {
    return this.adminService.admins;
  }

  get admin(): Admin {
    return this.adminService.admin;
  }

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    if (this.adminService.isAdminLoggedIn()) {
      this.router.navigate(['admin/dashboard']);
    }
  }

  public seConnecte(admin: Admin) {
    return this.adminService.seConnecte(admin).subscribe(
      data => {
        if (data != null) {
          this.adminService._admin = data;
          sessionStorage.setItem('nom', data.nom);
          sessionStorage.setItem('prenom', data.prenom);
          this.router.navigate(['admin/dashboard']);
        }
      }, error => {
        console.log(error);
      }
    );
  }

}
