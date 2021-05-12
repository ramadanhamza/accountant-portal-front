import { Injectable } from '@angular/core';
import {Postulation} from '../model/postulation.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostulationService {

  public showMsg: boolean = false;
  public showForm: boolean = true;

  private urlBase = 'http://localhost:8090';
  private url = '/stock/postulation/';

  private _postulation: Postulation;
  private _postulations: Array<Postulation>;

  constructor(private http: HttpClient) { }

  public findAll() {
    this.http.get<Array<Postulation>>(this.urlBase + this.url).subscribe(
      data => {
        this.postulations = data;
        for (let i=0 ; i< data.length;i++ ){




          this.postulations[i].message= this.postulations[i].message.replace("/home/nyanpasu/vscodegit/accountant-portal-front/src/","");
          this.postulations[i].cv= this.postulations[i].cv.replace("/home/nyanpasu/vscodegit/accountant-portal-front/src/","");

              console.log( this.postulations[i].message);


            }
      }, error => {
        console.log(error);
      }
    );
  }

  public save() {
    if (this.postulation.code == null) {
      var formData:FormData = new FormData();

     var cv =this.postulation.cvFile;
     var message =this.postulation.messageFile;
     formData.append( "cvFile", cv);
     formData.append( "messageFile", message);

   formData.append( "nom", this.postulation.nom );
   formData.append( "prenom", this.postulation.prenom );

   formData.append( "email", this.postulation.email );





     this.http.post(this.urlBase + this.url + '/', formData).subscribe(
        data => {
          if (data > 0) {
            this.postulations.push(this.postulation);
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

  get postulation(): Postulation {
    if (this._postulation == null) {
      this._postulation = new Postulation();
    }
    return this._postulation;
  }

  get postulations(): Array<Postulation> {
    if (this._postulations == null) {
      this._postulations = new Array<Postulation>();
    }
    return this._postulations;
  }

  set postulation(value: Postulation) {
    this._postulation = value;
  }

  set postulations(value: Array<Postulation>) {
    this._postulations = value;
  }
  public delete(i) {
    const cCode = this.postulations[i].code;
    this.http.delete(this.urlBase + this.url + 'code/' + cCode + '/').subscribe(
      data => {
        if (data > 0) {
          this.postulations.splice(i, 1);
        }
        else {
          alert('unsuccessful');
        }
      }, error => {
        console.log(error);
      }
    );
  }

  public changeReponse(p:Postulation) {
    const cCode = p.code;
    p.reponse = 'Email envoyé';
    this.http.put(this.urlBase + this.url + 'reponse/code/' + cCode + '/', p).subscribe(
      data => {
        if (data > 0) {
          p.reponse = 'Email envoyé';
        }
      }, error => {
        console.log(error);
      }
    );
  }

  public changeAffirmation(i, c) {
    const cCode = this.postulations[i].code;
    if (c == 1) {
      this.postulations[i].affirmation = 'Accepté';
    }
    else if (c == 0) {
      this.postulations[i].affirmation = 'Refusé';
    }
    this.http.put(this.urlBase + this.url + 'affirmation/code/' + cCode + '/', this.postulations[i]).subscribe(
      data => {
        if (data > 0) {
          if (c == 1) {
            this.postulations[i].affirmation = 'Accepté';
          }
          else if (c == 0) {
            this.postulations[i].affirmation = 'Refusé';
          }
        }
      }, error => {
        console.log(error);
      }
  );
}
}
