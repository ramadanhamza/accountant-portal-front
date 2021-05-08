import { PostService } from 'src/app/controller/service/post.service';
import {Component, Directive, EventEmitter, OnInit, Output} from '@angular/core';
import { Post } from 'src/app/controller/model/post.model';



@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  n: number;

 constructor(public postservice: PostService) { }
  //


  public get post(): Post{
    if (this.postservice.post == null) { this.postservice.post = new Post(); }
    return  this.postservice.post;
  }

   public save(){this.postservice.save();
   // }
   }




  // public validateSave() {
  //   return this.postservice.validateSave();
  // }



  onCileChange(evt): void {
    this.post.image= evt.target.files[0];
    console.log(evt.target.files[0]);
    console.log(this.post.image);

  }




  indx(s: number) {
    this.n = s;
    console.log(this.n);
    console.log(s);
  }

ngOnInit(): void {
    this.indx(this.n);
  }




  }
