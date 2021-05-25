import { Injectable } from '@angular/core';
import {Admin} from '../model/admin.model';
import {HttpClient} from '@angular/common/http';
import {Rdv} from '../model/rdv.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private urlBase = 'http://localhost:8090';
  private url = '/stock/admin/';

  constructor(private http: HttpClient) {
  }

  public _admin: Admin;
  private _admins: Array<Admin>;

  public seConnecte(admin: Admin) {
    return this.http.post<Admin>(this.urlBase + this.url + 'loginAdmin', admin);
  }

  public isAdminLoggedIn() {
    let admin = sessionStorage.getItem('nom');
    console.log(!(admin === null));
    return !(admin === null);
  }

  public logOut() {
    this.admin = null;
    sessionStorage.removeItem('prenom');
    sessionStorage.removeItem('nom');
  }

  get admin(): Admin {
    if (this._admin == null) {
      this._admin = new Admin();
    }
    return this._admin;
  }

  set admin(value: Admin) {
    this._admin = value;
  }

  get admins(): Array<Admin> {
    if (this._admins == null) {
      this._admins = new Array<Admin>();
    }
    return this._admins;
  }

  set admins(value: Array<Admin>) {
    this._admins = value;
  }
}
