import { Component, OnInit } from '@angular/core';
import { Subscription } from '../controller/model/subscription.model';
import { PostService } from '../controller/service/post.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {



public get sub() : Subscription {
  return this.postService.sub;
}


  constructor(private postService:PostService) { }

  ngOnInit(): void {
  }

abonner(){
this.postService.abonner();
}


}
