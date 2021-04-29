import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public adminNDC = 'admin';
  public adminMDP = 'admin';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  seConnecter() {
    if (this.adminNDC == 'admin' && this.adminMDP == 'admin') {
      this.router.navigateByUrl('/admin/dashboard');
    }
  }
}
