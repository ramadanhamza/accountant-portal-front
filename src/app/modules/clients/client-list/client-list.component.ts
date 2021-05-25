import { Component, OnInit } from '@angular/core';
import {Client} from '../../../controller/model/client.model';
import {ClientService} from '../../../controller/service/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  get clients(): Array<Client> {
    return this.clientService.clients;
  }

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.findAll();
  }

}
