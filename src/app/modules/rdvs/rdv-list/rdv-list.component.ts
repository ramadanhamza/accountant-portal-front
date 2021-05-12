import { PostService } from './../../../controller/service/post.service';
import { Component, Inject, OnInit } from '@angular/core';
import {Rdv} from '../../../controller/model/rdv.model';
import {RdvService} from '../../../controller/service/rdv.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Message } from 'src/app/controller/model/message.model';


@Component({
  selector: 'app-rdv-list',
  templateUrl: './rdv-list.component.html',
  styleUrls: ['./rdv-list.component.scss']
})
export class RdvListComponent implements OnInit {
  get rdvs(): Array<Rdv> {
    return this.rdvService.rdvs;

  }
  public get mail() : Message {
    if (this.postservice.mail == null) { this.postservice.mail = new Message(); }
    return  this.postservice.mail;
  }

  constructor(private rdvService: RdvService,private dialog: MatDialog, private postservice: PostService) { }

  ngOnInit(): void {
    this.rdvService.findAll();

  }

  repondre(i) {
    this.rdvService.changeReponse(i);
  }

  accepter(i) {
    const c = 1;
    this.rdvService.changeAffirmation(i, c);
  }

  refuser(i) {
    const c = 0;
    this.rdvService.changeAffirmation(i, c);
  }

  delete(i) {
    this.rdvService.delete(i);
  }


  openDialog(rdv:Rdv): void {
    const dialogRef = this.dialog.open(ResponseMessage, {

      width: '70%',
      height:'70%',
      data:{ rdv :rdv }
    });




dialogRef.afterOpened().subscribe(result =>{
this.clone(rdv);

});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  rodv:Rdv=new Rdv();

  clone(rdv:Rdv) {import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';


    console.log(rdv.affirmation);



    this.mail.to = rdv.client.email;
this.rodv=rdv;

if(rdv.affirmation == "Refusé"){


this.mail.subject =" Votre demande de rendez-vous n'est pas Acceptée";

this.mail.text = "cher client  "+rdv.client.nom+" "+rdv.client.prenom+" Votre demande de rendez-vous n'est pas Acceptée ";
console.log(this.mail.to);


}
else if(rdv.affirmation == "Accepté"){


  this.mail.subject =" Votre demande de rendez-vous est  Acceptée";

  this.mail.text = "cher client "+" "+ rdv.client.nom+" "+rdv.client.prenom+" Votre demande de rendez-vous est Acceptée ";
  console.log(this.mail.to);


  }
else {

alert("Veuillez reaffirmez le rendez-vous");


}


  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './response.html',
})
export class ResponseMessage implements OnInit  {
rdv:Rdv;
  constructor(
    public dialogRef: MatDialogRef<ResponseMessage>,
    @Inject(MAT_DIALOG_DATA) public data: any,private postservice: PostService,private rdvService:RdvService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  public get mail() : Message {
    if (this.postservice.mail == null) { this.postservice.mail = new Message(); }
    return  this.postservice.mail;
  }

  ngOnInit(): void {
}
  send(){

    this.postservice.send();

    }

  }







