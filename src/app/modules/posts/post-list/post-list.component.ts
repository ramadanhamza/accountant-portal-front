import { PostService } from 'src/app/controller/service/post.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Post } from 'src/app/controller/model/post.model';
import { PostCreateComponent } from '../post-create/post-create.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  keyword: string;

  constructor(private postservice: PostService,private dialog: MatDialog) { }
  delete(index: number , post: Post) {
    this.postservice.delete(index , post);
    /*
        this.timeline.splice(index, 1);
    */
  }
  edit(index: number, post: Post) {
    this.postservice.edit(index, post);
  }

  public get timeline(): Array<Post> {
    if (this.postservice.timeline == null) {
      this.postservice.timeline = new Array<Post>();
    }
    return this.postservice.timeline;
  }

  ngOnInit(): void {
    this.postservice.init();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PostCreateComponent, {
      width: '70%',
      height:'70%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



      displayImage(i) {
        console.log(i);
      let  pic = this.timeline[i].image;
            let imgElement = document.getElementById(pic) as HTMLImageElement;

            imgElement.src = pic.replace("/home/nyanpasu/vscodegit/accountant-portal-front/src/app/modules/posts/post-list","");

        }


//  search(keyword: string){
//    this.postservice.search(keyword);
//  }
  }



