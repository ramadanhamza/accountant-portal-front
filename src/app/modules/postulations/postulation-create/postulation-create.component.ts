import { Component, OnInit } from '@angular/core';
import {PostulationService} from '../../../controller/service/postulation.service';
import {Postulation} from '../../../controller/model/postulation.model';

@Component({
  selector: 'app-postulation-create',
  templateUrl: './postulation-create.component.html',
  styleUrls: ['./postulation-create.component.css']
})
export class PostulationCreateComponent implements OnInit {

  constructor(public postulationService: PostulationService) { }

  get postulation(): Postulation {
    return this.postulationService.postulation;
  }

  public save() {
    return this.postulationService.save();
  }

  ngOnInit(): void {
  }
  onCileChange(evt): void {
    this.postulation.cvFile= evt.target.files[0];
    console.log(evt.target.files[0]);
    console.log(this.postulation.messageFile);
    console.log(this.postulation.cvFile);

  }
  onMileChange(evnt): void {
    this.postulation.messageFile= evnt.target.files[0];
    console.log(evnt.target.files[0]);
    console.log(this.postulation.messageFile);

  }

}
