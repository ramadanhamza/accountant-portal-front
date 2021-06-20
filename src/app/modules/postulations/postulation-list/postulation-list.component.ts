import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Postulation } from 'src/app/controller/model/postulation.model';
import { PostulationService } from 'src/app/controller/service/postulation.service';
import { SimpleMessageComponent } from '../../simple-message/simple-message.component';
import {PostService} from '../../../controller/service/post.service';
import { Message } from 'src/app/controller/model/message.model';

@Component({
  selector: 'app-postulation-list',
  templateUrl: './postulation-list.component.html',
  styleUrls: ['./postulation-list.component.scss']
})
export class PostulationListComponent implements OnInit {


  public get mail(): Message {
    if (this.postService.mail == null) { this.postService.mail = new Message(); }
    return  this.postService.mail;
  }



  get postulations(): Array<Postulation> {
    return this.postulationService.postulations;
  }

  constructor(private postulationService: PostulationService, private sanitizer: DomSanitizer, private dialog: MatDialog, private postService: PostService) { }

  p = 1;
  recherche: any;

  fileUrl;

  key: string;
  reverse = false;

  search() {
    if (this.recherche == '') {
      this.ngOnInit();
    }
    else {
      this.postulationService.postulations = this.postulationService.postulations.filter(res => {
        return res.nom.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase())
          || res.prenom.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase())
          || res.email.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase())
          || res.message.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase())
          || res.cv.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase())
          || res.affirmation.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase())
          || res.reponse.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase());
      });
    }
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  ngOnInit(): void {
    this.postulationService.findAll();
  }

  repondre(i: number) {
    this.postService.send();

  }


  accepter(i) {
    const c = 1;
    this.postulationService.changeAffirmation(i, c);
  }

  refuser(i) {
    const c = 0;
    this.postulationService.changeAffirmation(i, c);
  }

  delete(i) {
    this.postulationService.delete(i);
  }

  openDialog(p: Postulation): void {
    const dialogRef = this.dialog.open(PostulationMessage, {
      width: '70%',
      height: '70%',
      data: {postulation: p },
    });

    dialogRef.afterOpened().subscribe(result => {
      this.clone(p);

      });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.mail.to=null;
      this.mail.subject=null;
      this.mail.text=null;
    });


  }
  clone(postulation: Postulation) {

    console.log(postulation.affirmation);



    this.mail.to = postulation.email;


    if (postulation.affirmation == 'Refusé'){


this.mail.subject = 'Demande de postulation refusée';

this.mail.text = 'Cher client ' + capitalizeFirstLetter(postulation.prenom) + ' ' + capitalizeFirstLetter(postulation.nom) + ',';
console.log(this.mail.to);


}
else if (postulation.affirmation == 'Accepté'){


  this.mail.subject = 'Demande de postulation acceptée';

  this.mail.text = 'Cher client ' + capitalizeFirstLetter(postulation.prenom) + ' ' + capitalizeFirstLetter(postulation.nom) + ',';
  console.log(this.mail.to);


  }
else {

alert('Veuillez reaffirmez le rendez-vous');


}


  }


}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './response.html',
})
export class PostulationMessage implements OnInit  {
pstl: Postulation;
  constructor(
    public dialogRef: MatDialogRef<PostulationMessage>,
    @Inject(MAT_DIALOG_DATA) public data: any, private postservice: PostService, private postulationService: PostulationService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  public get mail(): Message {
    if (this.postservice.mail == null) { this.postservice.mail = new Message(); }
    return  this.postservice.mail;
  }

  ngOnInit(): void {
}
  send(p: Postulation ){

    this.postservice.send();
    this.postulationService.changeReponse(p);

    }

  }

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
