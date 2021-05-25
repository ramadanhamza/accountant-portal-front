import { Injectable } from '@angular/core';
import {Admin} from '../model/admin.model';
import {HttpClient} from '@angular/common/http';
import {Rdv} from '../model/rdv.model';
import {Post} from '../model/post.model';
import {Client} from '../model/client.model';

class LoginDetails {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public showMsg: boolean = false;
  public showForm: boolean = true;
  public mdpChange: boolean = false;

  private urlBase = 'http://localhost:8090';
  private url = '/stock/admin/';

  constructor(private http: HttpClient) { }

  public findAll() {
    this.http.get<Array<Admin>>(this.urlBase + this.url).subscribe(
      data => {
        this.admins = data;
      }, error => {
        console.log(error);
      }
    );
  }

  public delete(i) {
    const cLogin = this.admins[i].login;
    this.http.delete(this.urlBase + this.url + 'login/' + cLogin + '/').subscribe(
      data => {
        if (data > 0) {
          this.admins.splice(i, 1);
        }
        else {
          alert('unsuccessful');
        }
      }, error => {
        console.log(error);
      }
    );
  }

  public _admin: Admin;
  private _admins: Array<Admin>;

  public seConnecte(admin: Admin) {
    return this.http.post<Admin>(this.urlBase + this.url + 'loginAdmin', admin);
  }

  public isAdminLoggedIn() {
    let admin = sessionStorage.getItem('login');
    console.log(!(admin === null));
    return !(admin === null);
  }

  public logOut() {
    this.admin = null;
    sessionStorage.removeItem('login');
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

  public pass: string;

  edit() {
    let test = sessionStorage.getItem('login');
    let test2 = JSON.parse(test);
    var formData: FormData = new FormData();
    formData.append( "login", test2);
    formData.append( "password", this.pass);
    console.log(test2);
    this.http.put(this.urlBase + this.url + '/login/', formData).subscribe(data => {
        if (data > 0){
          this.mdpChange = true;
        }
        else {
          alert('update unsuccessful | ' + data);

        }
      }
      , error => {
        console.log(error);
      }
    );
  }

  public save() {
    if (this.admin.id == null) {
      this.http.post(this.urlBase + this.url + '/', this.admin).subscribe(
        data => {
          if (data > 0) {
            this.admins.push(this.admin);
            this.showForm = false;
            this.showMsg = true;
          }
          else {
            alert('Une erreur s\'est reproduite, veuillez réessayer');
          }
        }, error => {
          console.log(error);
        }
      );
    }
  }

  clone(admin: Admin): Admin {
    let myClone = new Admin();
    myClone.id = admin.id;
    myClone.login = admin.login;
    myClone.password = admin.password;
    myClone.nom = admin.nom;
    myClone.prenom = admin.prenom;
    return myClone;
  }
}
