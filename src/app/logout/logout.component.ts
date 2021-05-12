import { Component, OnInit } from '@angular/core';
import {AdminService} from '../controller/service/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.logOut();
    this.router.navigate(['admin']);
  }

}
