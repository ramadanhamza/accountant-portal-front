import { Component, OnInit } from '@angular/core';
import {Rdv} from '../../../controller/model/rdv.model';
import {ContactService} from '../../../controller/service/contact.service';
import {Contact} from '../../../controller/model/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  public show: boolean = false;
  public buttonName: any = 'Répondre';

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

  constructor(private contactService: ContactService) { }

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

}
