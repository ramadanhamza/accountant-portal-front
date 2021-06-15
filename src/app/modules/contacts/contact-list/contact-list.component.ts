import { Component, Inject, OnInit } from '@angular/core';
import {ContactService} from '../../../controller/service/contact.service';
import {Contact} from '../../../controller/model/contact.model';
import { Message } from 'src/app/controller/model/message.model';
import { PostService } from 'src/app/controller/service/post.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  p: number = 1;
  recherche: any;

  public show: boolean = false;
  public buttonName: any = 'Répondre';
  public get mail(): Message {
    if (this.postservice.mail == null) { this.postservice.mail = new Message(); }
    return  this.postservice.mail;
  }

  toggle() {
    this.show = !this.show;

    if (this.show) {
      this.buttonName = 'Annuler';
    }
    else {
      this.buttonName = 'Répondre';

    }
  }

  get contacts(): Array<Contact> {
    return this.contactService.contacts;
  }

  search() {
    if (this.recherche == "") {
      this.ngOnInit();
    }
    else {
      this.contactService.contacts = this.contactService.contacts.filter(res => {
        return res.client.email.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase())
          || res.sujet.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase())
          || res.message.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase());
      });
    }
  }

  key: string;
  reverse: boolean = false;

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  constructor(private contactService: ContactService,private postservice : PostService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.contactService.findAll();
  }

  delete(i) {
    this.contactService.delete(i);
  }

  send(element, text) {
    element.textContent = text;
    element.disabled = true;
  }
  openDialog(c:Contact): void {
    const dialogRef = this.dialog.open(ContactMessage, {

      width: '70%',
      height:'70%',
      data:{ c :c }
    });




dialogRef.afterOpened().subscribe(result =>{
this.clone(c);

});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  clone(c:Contact) {



    this.mail.to = c.client.email;







  }



  }
  @Component({
    selector: 'response-message',
    templateUrl: './response.html',
  })
  export class ContactMessage implements OnInit  {
  c:Contact;
    constructor(
      public dialogRef: MatDialogRef<ContactMessage>,
      @Inject(MAT_DIALOG_DATA) public data: any,private postservice: PostService) { }

    onNoClick(): void {
      this.dialogRef.close();
    }


    public get mail() : Message {
      if (this.postservice.mail == null) { this.postservice.mail = new Message(); }
      return  this.postservice.mail;
    }

    ngOnInit(): void {
  }
    send(c:Contact){

      this.postservice.send();


      }

    }


