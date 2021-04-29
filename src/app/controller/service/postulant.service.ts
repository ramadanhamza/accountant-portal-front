import { Injectable } from '@angular/core';
import {Postulant} from '../model/postulant.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostulantService {

  private urlBase = 'http://localhost:8090';
  private url = '/stock/postulant/';

  private _postulant: Postulant;
  private _postulants: Array<Postulant>;

  constructor(private http: HttpClient) { }

  public findAll() {
    this.http.get<Array<Postulant>>(this.urlBase + this.url).subscribe(
      data => {
        this.postulants = data;
      }, error => {
        console.log(error);
      }
    );
  }

  get postulant(): Postulant {
    if (this._postulant == null) {
      this._postulant = new Postulant();
    }
    return this._postulant;
  }

  get postulants(): Array<Postulant> {
    if (this._postulants == null) {
      this._postulants = new Array<Postulant>();
    }
    return this._postulants;
  }

  set postulant(value: Postulant) {
    this._postulant = value;
  }

  set postulants(value: Array<Postulant>) {
    this._postulants = value;
  }
}
