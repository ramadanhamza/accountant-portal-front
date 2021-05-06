import { Component, OnInit } from '@angular/core';
import {RdvService} from '../../../controller/service/rdv.service';
import {Rdv} from '../../../controller/model/rdv.model';

@Component({
  selector: 'app-rdv-create',
  templateUrl: './rdv-create.component.html',
  styleUrls: ['./rdv-create.component.css']
})
export class RdvCreateComponent implements OnInit {

  public showMsg: boolean = false;
  public showForm: boolean = true;

  constructor(private rdvService: RdvService) { }

  get rdv(): Rdv {
    return this.rdvService.rdv;
  }

  public save() {
    this.showForm = false;
    this.showMsg = true;
    return this.rdvService.save();
  }

  ngOnInit(): void {
  }

}
