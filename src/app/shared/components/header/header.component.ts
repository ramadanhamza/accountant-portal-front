import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AdminService} from '../../../controller/service/admin.service';
import {Admin} from '../../../controller/model/admin.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public adminPrenom = JSON.parse(sessionStorage.getItem('prenom'));
  public adminNom = JSON.parse(sessionStorage.getItem('nom'));

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

}
