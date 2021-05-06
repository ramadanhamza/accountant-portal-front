import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Postulation } from 'src/app/controller/model/postulation.model';
import { PostulationService } from 'src/app/controller/service/postulation.service';

@Component({
  selector: 'app-postulation-list',
  templateUrl: './postulation-list.component.html',
  styleUrls: ['./postulation-list.component.scss']
})
export class PostulationListComponent implements OnInit {
  fileUrl;

  get postulations(): Array<Postulation> {
    return this.postulationService.postulations;
  }

  constructor(private postulationService: PostulationService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.postulationService.findAll();

    // const data = this.postulations[1].cv
    // const blob = new Blob([data], { type: 'application/octet-stream' });

    // this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }
  accepter(i) {
    const c = 1;
    this.postulationService.changeAffirmation(i, c);
  }

  refuser(i) {
    const c = 0;
    this.postulationService.changeAffirmation(i, c);
  }

  // delete(i) {
  //   this.postulationService.delete(i);
  // }

}

