import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../model/message.model';
import { Post } from '../model/post.model';
import { Subscription } from '../model/subscription.model';
import { PostulationService } from './postulation.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  // postItem: PostItem;i

  private _post: Post;
  private _timeline: Array<Post>;
  private index: number;
  // private urlProd = 'http://localhost:8090';
  private  urlProd='http://visionconsultingmanagement.com';

  private url = '/stock/post';
  private _mail: Message;

  private _sub: Subscription;
  get sub(): Subscription {
    if (this._sub == null) {
      this._sub = new Subscription();
    }
    return this._sub;
  }
  set sub(value: Subscription) {
    this._sub = value;
  }

  get mail(): Message {
    return this._mail;
  }
  set mail(value: Message) {
    this._mail = value;
  }
  get post(): Post {
    if (this._post == null) {
      this._post = new Post();
    }
    return this._post;
  }

  set post(value: Post) {
    this._post = value;
  }

  get timeline(): Array<Post> {
    if (this._timeline == null) {
      this._timeline = new Array<Post>();
    }

    return this._timeline;
  }

  set timeline(value: Array<Post>) {
    if (this._timeline == null) {
      this._timeline = new Array<Post>();
    }

    this._timeline = value;
  }

public save() {
  var formData:FormData = new FormData();
if (this.post.code == null){


this.timeline.push(this.clone(this.post));
var image =this.post.img;
formData.append( "image", image);
formData.append( "content", this.post.content );
formData.append( "titre", this.post.titre );
formData.append( "date", this.post.date );


this.http.post( this.urlProd + this.url + '/', formData).subscribe(
    data => { if (data > 0)
    {console.log(this.post);
      alert(' le poste est sauvgardé')

    }else {alert('Une erreur s\'est reproduite, veuillez réessayer'); }},
    error => {
      console.log(error);
  }
  );
  this.post = null;

}else {
  this.timeline[this.index] = this.clone(this.post);
  const dcode = this.timeline[this.index].code;
  console.log(dcode);
  var image =this.timeline[this.index].img;
if (image!=null) {
  formData.append( "image", image);
}

formData.append( "content", this.timeline[this.index].content );
formData.append( "titre", this.timeline[this.index].titre );

  this.http.put(this.urlProd + this.url + '/code/' + dcode + '/' , formData).subscribe(data => {
      if (data > 0){
        alert(' The update is successful');
      }


      else { alert('update unsuccessful');
      }

    }
    );
}

}

  edit(i: number, post: Post) {
    this.index = i;
    this._post = this.clone(post);
  }


  public init() {
    this.http.get<Array<Post>>(this.urlProd + this.url + '/').subscribe(
      (data) => {
        this.timeline = data;
        console.log(data.length);
        for (let i = 0; i < this.timeline.length; i++) {
          if ( this.timeline[i].image != null)
          this.timeline[i].image = this.timeline[i].image.replace(
            '/home/nyanpasu/vscodegit/accountant-portal-front/src/',
            ''
          );
          // this.timeline[i].image = this.timeline[i].image.replace(
          //   '/home/visionco5/appservers/apache-tomcat-8.0.48/webapps/ROOT/WEB-INF/classes/static/',
          //   ''
          // );




          console.log(this.timeline[i].image+i);
        }
      },
      (error) => {
        console.log(error);
      }
    );}
clone(post: Post): Post {
   const myClone = new Post();
   myClone.titre = post.titre;
   myClone.content = post.content;
   myClone.code = post.code;
   myClone.img = post.img;


   return myClone;
  }


  constructor(private  http: HttpClient, private postulationService: PostulationService) { }


  public delete(index: number, s: Post) {
    const dcode = this.timeline[index].code;
    console.log(dcode);
    this.http
      .delete(this.urlProd + this.url + '/code/' + dcode + '/')
      .subscribe(
        (data) => {
          if (data > 0) {
            this.timeline.splice(index, 1);
            alert('deletion successful');

          } else {
            alert('deletion unsuccessful');
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  send() {
    console.log(this.mail.text);
    console.log(this.mail.subject);
    this.http
      .post(this.urlProd + '/stock/newsletter/mail', this.mail)
      .subscribe((data) => {
        alert('email envoyé');
      });
    this.mail = null;
  }

  abonner() {
    console.log(this.sub.email);
    this.http
      .post(this.urlProd + this.url + '/subscription', this.sub)
      .subscribe(
        (data) => {
          if (data == -1) {
            alert('email déja en utilisation');
          }
          if (data == -2) {
            alert(' entrez un email valid');
          }
          if (data == 1) {
            alert('abonné avec succès');
          }
        },
        (error) => {
          console.log(error);
        }
      );
    this.sub = null;
  }

  messageAll() {
    this.http
      .post(this.urlProd + this.url + '/messageAll/', this.mail)
      .subscribe((error) => {
        console.log(error);
      });

    this.mail = null;
  }

  // search(keyword: string) {
  //   this.http
  //     .post<Array<Post>>(
  //       this.urlProd + this.url + '/BasicSearch/' + keyword,
  //       keyword
  //     )
  //     .subscribe(
  //       (data) => {
  //         this.timeline = data;
  //         if (this.timeline[0]==null){
  //            const p= new Post();
  //           p.content="No results found"
  //           console.log(p);
  //           console.log(this.timeline);
  //               this.timeline.push(p);
  //         }


  //         for (let i = 0; i < this.timeline.length; i++) {
  //           this.timeline[i].image = this.timeline[i].image.replace(
  //             '/home/nyanpasu/vscodegit/accountant-portal-front/src/',
  //             ''
  //           );
  //           console.log(this.timeline[i].image);
  //         }
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }
}
