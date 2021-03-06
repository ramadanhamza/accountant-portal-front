import { PostService } from './../../controller/service/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/controller/model/post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService:PostService,private actRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe(params => {
      this.post.code = params.get('code');
    });
  }
  get timeline(): Array<Post> {
    if (this.postService.timeline == null) {
      this.postService.timeline = new Array<Post>();
    }
    return this.postService.timeline;


}

post:Post;





}
