import { PostService } from 'src/app/controller/service/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/controller/model/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private postservice: PostService) { }
  // tslint:disable-next-line:typedef
  delete(index: number , post: Post) {
    this.postservice.delete(index , post);
/*
    this.timeline.splice(index, 1);
*/
  }
  edit(index: number, post: Post) {
this.postservice.edit(index, post);
  }

public get timeline(): Array<Post> {
  if (this.postservice.timeline == null) {
    this.postservice.timeline = new Array<Post>();
  }
  return this.postservice.timeline;
}





  ngOnInit(): void {
    this.postservice.init();
  }
}
