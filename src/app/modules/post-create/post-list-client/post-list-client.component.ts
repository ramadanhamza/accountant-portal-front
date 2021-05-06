import { PostService } from 'src/app/controller/service/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/controller/model/post.model';

@Component({
  selector: 'app-post-list-client',
  templateUrl: './post-list-client.component.html',
  styleUrls: ['./post-list-client.component.css']
})
export class PostListClientComponent implements OnInit {

  constructor(private postservice: PostService) { }
  // tslint:disable-next-line:typedef

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
