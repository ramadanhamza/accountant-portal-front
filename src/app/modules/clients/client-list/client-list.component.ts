import { Component, OnInit } from '@angular/core';
import {Client} from '../../../controller/model/client.model';
import {ClientService} from '../../../controller/service/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  p: number = 1;
  recherche: any;

  get clients(): Array<Client> {
    return this.clientService.clients;
  }

  search() {
    if (this.recherche == "") {
      this.ngOnInit();
    }
    else {
      this.clientService.clients = this.clientService.clients.filter(res => {
        return res.nom.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase())
          || res.prenom.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase())
          || res.email.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase())
          || res.tel.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase());
      });
    }
  }

  key: string;
  reverse: boolean = false;

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.findAll();
  }

}
