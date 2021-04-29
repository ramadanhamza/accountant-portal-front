import { Injectable } from '@angular/core';
import {Rdv} from '../model/rdv.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  private urlBase = 'http://localhost:8090';
  private url = '/stock/rdv/';

  private _rdv: Rdv;
  private _rdvs: Array<Rdv>;

  constructor(private http: HttpClient) { }

  public findAll() {
    this.http.get<Array<Rdv>>(this.urlBase + this.url).subscribe(
      data => {
        this.rdvs = data;
      }, error => {
        console.log(error);
      }
    );
  }

  public delete(i) {
    const cCode = this.rdvs[i].code;
    this.http.delete(this.urlBase + this.url + 'code/' + cCode + '/').subscribe(
      data => {
        if (data > 0) {
          this.rdvs.splice(i, 1);
        }
        else {
          alert('unsuccessful');
        }
      }, error => {
        console.log(error);
      }
    );
  }

  public changeAffirmation(i, c) {
    const cCode = this.rdvs[i].code;
    if (c == 1) {
      this.rdvs[i].affirmation = 'Accepté';
    }
    else if (c == 0) {
      this.rdvs[i].affirmation = 'Refusé';
    }
    this.http.put(this.urlBase + this.url + 'code/' + cCode + '/', this.rdvs[i]).subscribe(
      data => {
        if (data > 0) {
          if (c == 1) {
            this.rdvs[i].affirmation = 'Accepté';
          }
          else if (c == 0) {
            this.rdvs[i].affirmation = 'Refusé';
          }
        }
      }, error => {
        console.log(error);
      }
  );
  }

  get rdv(): Rdv {
    if (this._rdv == null) {
      this._rdv = new Rdv();
    }
    return this._rdv;
  }

  set rdv(value: Rdv) {
    this._rdv = value;
  }

  get rdvs(): Array<Rdv> {
    if (this._rdvs == null) {
      this._rdvs = new Array<Rdv>();
    }
    return this._rdvs;
  }

  set rdvs(value: Array<Rdv>) {
    this._rdvs = value;
  }
}
