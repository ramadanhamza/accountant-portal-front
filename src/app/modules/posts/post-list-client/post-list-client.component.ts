import { PostService } from 'src/app/controller/service/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/controller/model/post.model';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
}
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
  tiles: Tile[] = [
    {cols: 1, rows: 2, color: 'lightblue'},
    { cols: 1, rows: 1, color: 'lightgreen'},
    { cols: 1, rows: 1, color: 'lightpink'},
    {cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
