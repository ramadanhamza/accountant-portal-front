import { Component, OnInit } from '@angular/core';
import {Rdv} from '../../../controller/model/rdv.model';
import {RdvService} from '../../../controller/service/rdv.service';

@Component({
  selector: 'app-rdv-list',
  templateUrl: './rdv-list.component.html',
  styleUrls: ['./rdv-list.component.scss']
})
export class RdvListComponent implements OnInit {

  get rdvs(): Array<Rdv> {
    return this.rdvService.rdvs;
  }

  constructor(private rdvService: RdvService) { }

  ngOnInit(): void {
    this.rdvService.findAll();
  }

  accepter(i) {
    const c = 1;
    this.rdvService.changeAffirmation(i, c);
  }

  refuser(i) {
    const c = 0;
    this.rdvService.changeAffirmation(i, c);
  }

  delete(i) {
    this.rdvService.delete(i);
  }

  send(element, text) {
    element.textContent = text;
    element.disabled = true;
  }

}
