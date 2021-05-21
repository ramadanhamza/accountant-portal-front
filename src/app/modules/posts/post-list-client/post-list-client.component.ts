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
  styleUrls: ['./post-list-client.component.scss']
})

export class PostListClientComponent implements OnInit {

  p: number = 1;
  recherche: any;



  constructor(private postService: PostService) { }
  // tslint:disable-next-line:typedef

  public get timeline(): Array<Post> {
    if (this.postService.timeline == null) {
      this.postService.timeline = new Array<Post>();
    }
    return this.postService.timeline;
  }

  search() {
    if (this.recherche == "") {
      this.ngOnInit();
    }
    else {
      this.postService.timeline = this.postService.timeline.filter(res => {
        return res.titre.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase())
          || res.date.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase());
      });
    }
  }

  ngOnInit(): void {
    this.postService.init();
  }
  tiles: Tile[] = [
    {cols: 1, rows: 2, color: 'lightblue'},
    { cols: 1, rows: 1, color: 'lightgreen'},
    { cols: 1, rows: 1, color: 'lightpink'},
    {cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
