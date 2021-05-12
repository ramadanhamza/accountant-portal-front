import {Component, inject, OnInit} from '@angular/core';
import { Message } from 'src/app/controller/model/message.model';
import { PostService } from 'src/app/controller/service/post.service';
import {RdvService} from '../../controller/service/rdv.service';

@Component({
  selector: 'app-simple-message',
  templateUrl: './simple-message.component.html',
  styleUrls: ['./simple-message.component.css']
})
export class SimpleMessageComponent implements OnInit {

  constructor(public postservice: PostService, public rdvService: RdvService) { }


  ngOnInit(): void {
  }

  public get mail(): Message {
    if (this.postservice.mail == null) { this.postservice.mail = new Message(); }
    return  this.postservice.mail;
  }

  send() {

    this.postservice.send();

    }

}
