import { Component, OnInit } from '@angular/core';
import {PostService} from '../controller/service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor() { }

  ngOnInit(): void {
  }

}
