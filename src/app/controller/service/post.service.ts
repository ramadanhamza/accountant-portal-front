import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../model/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {
// postItem: PostItem;i


 private _post: Post;
  private _timeline: Array<Post> ;
  private index: number;
private  UrlBase = 'http://localhost:8090';
private  url = '/stock/post';
  get post(): Post {
    if (this._post == null ){this._post = new Post(); }
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
    if (this._timeline == null ){this._timeline = new Array<Post>(); }

    this._timeline = value;
  }

public save() {
if (this.post.code == null){


this.timeline.push(this.clone(this.post));

this.http.post( this.UrlBase + this.url + '/', this.post).subscribe(
    data => { if (data > 0)
    {console.log(this.post);

    }else {alert('erreur lors la creation du post :' + data); }}
  );

}else {
  this.timeline[this.index] = this.clone(this.post);
  this.timeline.push(this.clone(this.post));
  const dcode = this.timeline[this.index].code;
  console.log(dcode);
  this.http.put(this.UrlBase + this.url + '/code/' + dcode + '/' , this.timeline[this.index]).subscribe(data => {
      if (data > 0){

        this.timeline.splice(this.index, 1);
        this.timeline.push(this.clone(this.post));
        this.timeline.splice(this.index+1, 1);
      }
      else { alert('update unsuccessful');
      }
    }
    , error => {
      console.log(error);
    }
  );


}

this.post = null;
}
  edit(i: number, post: Post) {
    this.index = i;
    this._post = this.clone(post);

  }

clone(post: Post): Post {
   const myClone = new Post();
   myClone.titre = post.titre;
   myClone.content = post.content;



   return myClone;
  }


  constructor(private  http: HttpClient) { }
public init(){
    this.http.get<Array<Post>>(this.UrlBase + this.url + '/').subscribe(data => {
this.timeline = data;
    }
    , error => {
console.log(error);
      }
    );
}
 public  delete(index: number , s: Post){

   const dcode = this.timeline[index].code;
   console.log(dcode);
   this.http.delete(this.UrlBase + this.url + '/code/' + dcode + '/').subscribe(data => {
     if (data > 0){
     this.timeline.splice(index, 1);
     }
     else { alert('deletion unsuccessful');
     }
     }
     , error => {
       console.log(error);
     }
   );
  }
  }
