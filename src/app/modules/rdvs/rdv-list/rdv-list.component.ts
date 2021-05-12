import { Component, Inject, OnInit } from '@angular/core';
import {Rdv} from '../../../controller/model/rdv.model';
import {RdvService} from '../../../controller/service/rdv.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SimpleMessageComponent } from '../../simple-message/simple-message.component';


@Component({
  selector: 'app-rdv-list',
  templateUrl: './rdv-list.component.html',
  styleUrls: ['./rdv-list.component.scss']
})
export class RdvListComponent implements OnInit {

  get rdvs(): Array<Rdv> {
    return this.rdvService.rdvs;
  }

  constructor(private rdvService: RdvService, private dialog: MatDialog) { }
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

  openDialog(): void {
    const dialogRef = this.dialog.open(SimpleMessageComponent, {
      width: '70%',
      height:'70%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }




}
