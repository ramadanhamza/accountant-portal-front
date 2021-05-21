import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../controller/model/post.model';
import { PostService } from '../controller/service/post.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private postService:PostService,private actRoute: ActivatedRoute) {
    this.post.code = this.actRoute.snapshot.params.code;

  }

  ngOnInit(): void {


  }
  get timeline(): Array<Post> {
    if (this.postService.timeline == null) {
      this.postService.timeline = new Array<Post>();
    }
    return this.postService.timeline;


}

post:Post=new Post();




}
