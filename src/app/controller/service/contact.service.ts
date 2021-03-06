import { Injectable } from '@angular/core';
import {Contact} from '../model/contact.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public showMsg: boolean = false;
  public showForm: boolean = true;

  // private urlBase = 'http://localhost:8090';
  private  urlProd='http://visionconsultingmanagement.com';
  private url = '/stock/contact/';

  private _contact: Contact;
  private _contacts: Array<Contact>;

  constructor(private http: HttpClient) { }

  public findAll() {
    this.http.get<Array<Contact>>(this.urlProd + this.url).subscribe(
      data => {
        this.contacts = data;
      }, error => {
        console.log(error);
      }
    );
  }

  public save() {
    if (this.contact.id == null) {
      this.http.post(this.urlProd + this.url + '/', this.contact).subscribe(
        data => {
          if (data > 0) {
            this.contacts.push(this.contact);
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

  public delete(i) {
    const cCode = this.contacts[i].code;
    this.http.delete(this.urlProd + this.url + 'code/' + cCode + '/').subscribe(
      data => {
        if (data > 0) {
          this.contacts.splice(i, 1);
        }
        else {
          alert('unsuccessful');
        }
      }, error => {
        console.log(error);
      }
    );
  }

  get contact(): Contact {
    if (this._contact == null) {
      this._contact = new Contact();
    }
    return this._contact;
  }

  set contact(value: Contact) {
    this._contact = value;
  }

  get contacts(): Array<Contact> {
    if (this._contacts == null) {
      this._contacts = new Array<Contact>();
    }
    return this._contacts;
  }

  set contacts(value: Array<Contact>) {
    this._contacts = value;
  }
}
