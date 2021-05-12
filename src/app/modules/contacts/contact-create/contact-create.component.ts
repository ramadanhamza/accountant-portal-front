import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../../controller/service/contact.service';
import {Contact} from '../../../controller/model/contact.model';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  lat = 31.637732055986188;
  lng = -8.003253828843288;

  constructor(public contactService: ContactService) { }

  get contact(): Contact {
    return this.contactService.contact;
  }

  public save() {
    return this.contactService.save();
  }

  ngOnInit(): void {
  }

}
