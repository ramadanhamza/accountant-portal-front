import { Component, OnInit } from '@angular/core';
import { Subscription } from '../controller/model/subscription.model';
import { PostService } from '../controller/service/post.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public get sub() : Subscription {
    return this.postService.sub;
  }


    constructor(private postService:PostService) { }

    ngOnInit(): void {
    }

  abonner(){
  console.log(this.sub.email);
  this.postService.abonner();

  }


}
