import { Component, OnInit } from '@angular/core';
import {RdvService} from '../../../controller/service/rdv.service';
import {Rdv} from '../../../controller/model/rdv.model';

@Component({
  selector: 'app-rdv-create',
  templateUrl: './rdv-create.component.html',
  styleUrls: ['./rdv-create.component.css']
})
export class RdvCreateComponent implements OnInit {

  constructor(public rdvService: RdvService) { }

  get rdv(): Rdv {
    return this.rdvService.rdv;
  }

  public save() {
    return this.rdvService.save();
  }

  ngOnInit(): void {
  }

}
