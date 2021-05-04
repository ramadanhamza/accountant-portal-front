import { Injectable } from '@angular/core';
import {Postulation} from '../model/postulation.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostulationService {

  private urlBase = 'http://localhost:8090';
  private url = '/stock/postulation/';

  private _Postulation: Postulation;
  private _Postulations: Array<Postulation>;

  constructor(private http: HttpClient) { }

  public findAll() {
    this.http.get<Array<Postulation>>(this.urlBase + this.url).subscribe(
      data => {
        this.Postulations = data;
      }, error => {
        console.log(error);
      }
    );
  }

  get Postulation(): Postulation {
    if (this._Postulation == null) {
      this._Postulation = new Postulation();
    }
    return this._Postulation;
  }

  get Postulations(): Array<Postulation> {
    if (this._Postulations == null) {
      this._Postulations = new Array<Postulation>();
    }
    return this._Postulations;
  }

  set Postulation(value: Postulation) {
    this._Postulation = value;
  }

  set Postulations(value: Array<Postulation>) {
    this._Postulations = value;
  }
  public delete(i) {
    const cCode = this.Postulations[i].code;
    this.http.delete(this.urlBase + this.url + 'code/' + cCode + '/').subscribe(
      data => {
        if (data > 0) {
          this.Postulations.splice(i, 1);
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
    const cCode = this.Postulations[i].code;
    if (c == 1) {
      this.Postulations[i].affirmation = 'Accepté';
    }
    else if (c == 0) {
      this.Postulations[i].affirmation = 'Refusé';
    }
    this.http.put(this.urlBase + this.url + 'code/' + cCode + '/', this.Postulations[i]).subscribe(
      data => {
        if (data > 0) {
          if (c == 1) {
            this.Postulations[i].affirmation = 'Accepté';
          }
          else if (c == 0) {
            this.Postulations[i].affirmation = 'Refusé';
          }
        }
      }, error => {
        console.log(error);
      }
  );
}
}
