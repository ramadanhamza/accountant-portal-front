import { Post } from './../controller/model/post.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PostService} from '../controller/service/post.service';
import { HttpClient } from '@angular/common/http';

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
  post: Post | undefined= new Post();
  posts= new Array<Post>();
  timeline: Array<Post> =new Array<Post>();

  constructor(private  http: HttpClient,private route: ActivatedRoute,private postService:PostService) {
    // this.postTitre = this.route.snapshot.params.titre;
    // this.postDate = this.route.snapshot.params.date;
    // this.postImage = this.route.snapshot.params.image;
    // this.postContent = this.route.snapshot.params.content;
  }

  getPost(): void {


    const code = String(this.route.snapshot.paramMap.get('code'));
    this.http.get<Array<Post>>('http://visionconsultingmanagement.com' + '/stock/post' + '/').subscribe(
      (data) => {
        this.timeline = data;
        console.log(data.length);
        for (let i = 0; i < this.timeline.length; i++) {
          if ( this.timeline[i].image != null)
          // this.timeline[i].image = this.timeline[i].image.replace(
          //   '/home/nyanpasu/vscodegit/accountant-portal-front/src/',
          //   ''
          // );
          this.timeline[i].image = this.timeline[i].image.replace(
            '/home/visionco5/appservers/apache-tomcat-8.0.48/webapps/ROOT/WEB-INF/classes/static/',
            ''
          );



        };
        const post = this.timeline.find(p => p.code == code)!;

          console.log(this.timeline);
          this.post = post   ;
      },
      (error) => {
        console.log(error);
      }

    );

  }



  ngOnInit(): void {

this.getPost();



}
}
