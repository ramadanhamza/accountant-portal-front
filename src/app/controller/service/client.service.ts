import { Injectable } from '@angular/core';
import {Client} from '../model/client.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlBase = 'http://localhost:8090';
  private url = '/stock/client/';
  private  urlProd='http://visionconsultingmanagement.com';


  private _client: Client;
  private _clients: Array<Client>;

  constructor(private http: HttpClient) { }

  public findAll() {
    this.http.get<Array<Client>>(this.urlProd + this.url).subscribe(
      data => {
        this.clients = data;
      }, error => {
        console.log(error);
      }
    );
  }

  get client(): Client {
    if (this._client == null) {
      this._client = new Client();
    }
    return this._client;
  }

  get clients(): Array<Client> {
    if (this._clients == null) {
      this._clients = new Array<Client>();
    }
    return this._clients;
  }

  set client(value: Client) {
    this._client = value;
  }

  set clients(value: Array<Client>) {
    this._clients = value;
  }
}
