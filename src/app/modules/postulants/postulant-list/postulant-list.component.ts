import { Component, OnInit } from '@angular/core';
import {Postulant} from '../../../controller/model/postulant.model';
import {PostulantService} from '../../../controller/service/postulant.service';

@Component({
  selector: 'app-postulant-list',
  templateUrl: './postulant-list.component.html',
  styleUrls: ['./postulant-list.component.scss']
})
export class PostulantListComponent implements OnInit {

  get postulants(): Array<Postulant> {
    return this.postulantService.postulants;
  }

  constructor(private postulantService: PostulantService) { }

  ngOnInit(): void {
    this.postulantService.findAll();
  }

}
