import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postTitre: any;
  postDate: any;
  postImage: any;
  postContent: any;

  constructor(private actRoute: ActivatedRoute) {
    this.postTitre = this.actRoute.snapshot.params.titre;
    this.postDate = this.actRoute.snapshot.params.date;
    this.postImage = this.actRoute.snapshot.params.image;
    this.postContent = this.actRoute.snapshot.params.content;
  }

  ngOnInit(): void {
  }

}
