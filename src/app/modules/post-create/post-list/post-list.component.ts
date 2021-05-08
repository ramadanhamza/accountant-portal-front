import { PostService } from 'src/app/controller/service/post.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Post } from 'src/app/controller/model/post.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PostCreateComponent } from '../post-create.component';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private postservice: PostService,private dialog: MatDialog) { }
  // tslint:disable-next-line:typedef
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





  }




