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

  p: number = 1;
  recherche: any;

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
