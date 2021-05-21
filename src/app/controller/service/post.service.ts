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
  private UrlBase = 'http://localhost:8090';
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
    var formData: FormData = new FormData();
    if (this.post.code == null) {
      this.timeline.push(this.clone(this.post));
      var image = this.post.img;

      formData.append('image', image);

      formData.append('content', this.post.content);
      formData.append('titre', this.post.titre);

      formData.append('date', this.post.date);

      this.http.post(this.UrlBase + this.url + '/', formData).subscribe(
        (data) => {
          if (data > 0) {
            console.log(this.post);
          } else {
            alert("Une erreur s'est reproduite, veuillez réessayer");
          }
        },
        (error) => {
          console.log(error);
        }
      );
      this.post = null;
    } else {
      this.timeline[this.index] = this.clone(this.post);
      const dcode = this.timeline[this.index].code;
      console.log(dcode);
      var image = this.timeline[this.index].img;
      if (image !== null) formData.append('image', image);

      formData.append('content', this.timeline[this.index].content);
      formData.append('titre', this.timeline[this.index].titre);

      formData.append('date', this.timeline[this.index].date);
      this.http
        .put(this.UrlBase + this.url + '/code/' + dcode + '/', formData)
        .subscribe(
          (data) => {
            if (data > 0) {
            } else {
              alert('update unsuccessful');
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  edit(i: number, post: Post) {
    this.index = i;
    this._post = this.clone(post);
  }

  clone(post: Post): Post {
    const myClone = new Post();
    myClone.titre = post.titre;
    myClone.content = post.content;
    myClone.date = post.date;
    myClone.code = post.code;

    return myClone;
  }

  constructor(
    private http: HttpClient,
    private postulationService: PostulationService
  ) {}
  public init() {
    this.http.get<Array<Post>>(this.UrlBase + this.url + '/').subscribe(
      (data) => {
        this.timeline = data;
        console.log(data.length);
        for (let i = 0; i < this.timeline.length; i++) {
          if ( this.timeline[i].image != null)
          this.timeline[i].image = this.timeline[i].image.replace(
            '/home/nyanpasu/vscodegit/accountant-portal-front/src/',
            ''
          );
          console.log(this.timeline[i].image+i);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  public delete(index: number, s: Post) {
    const dcode = this.timeline[index].code;
    console.log(dcode);
    this.http
      .delete(this.UrlBase + this.url + '/code/' + dcode + '/')
      .subscribe(
        (data) => {
          if (data > 0) {
            this.timeline.splice(index, 1);
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
      .post(this.UrlBase + '/stock/newsletter/mail', this.mail)
      .subscribe((data) => {
        console.log(this.mail.text);
        console.log(this.mail.subject);
      });
    this.mail = null;
  }

  abonner() {
    console.log(this.sub.email);
    this.http
      .post(this.UrlBase + this.url + '/subscription', this.sub)
      .subscribe(
        (data) => {
          if (data == -1) {
            alert('email déja en utilisation');
          }
          if (data == -2) {
            alert(' entrez un email valid');
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
      .post(this.UrlBase + this.url + '/messageAll/', this.mail)
      .subscribe((error) => {
        console.log(error);
      });

    this.mail = null;
  }

  // search(keyword: string) {
  //   this.http
  //     .post<Array<Post>>(
  //       this.UrlBase + this.url + '/BasicSearch/' + keyword,
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
