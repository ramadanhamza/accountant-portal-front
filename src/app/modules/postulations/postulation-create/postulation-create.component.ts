import { Component, OnInit } from '@angular/core';
import {PostulationService} from '../../../controller/service/postulation.service';
import {Rdv} from '../../../controller/model/rdv.model';
import {Postulation} from '../../../controller/model/postulation.model';

@Component({
  selector: 'app-postulation-create',
  templateUrl: './postulation-create.component.html',
  styleUrls: ['./postulation-create.component.css']
})
export class PostulationCreateComponent implements OnInit {

  public showMsg: boolean = false;
  public showForm: boolean = true;

  constructor(private postulationService: PostulationService) { }

  get postulation(): Postulation {
    return this.postulationService.postulation;
  }

  public save() {
    this.showForm = false;
    this.showMsg = true;
    return this.postulationService.save();
  }

  ngOnInit(): void {
  }

}
