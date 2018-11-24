import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Photographer } from '../photographer.model';
import { PhotographerService } from '../services/photographer.service';


@Component({
  selector: 'app-photographer-detail',
  templateUrl: './photographer-detail.component.html',
  styleUrls: ['./photographer-detail.component.css']
})
export class PhotographerDetailComponent implements OnInit {

  errorMessage = '';
  photographer: Photographer | undefined;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private photographerService: PhotographerService) {
  }
  
  

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getPhotographer(id);
    }
  }

  getPhotographer(id: number) {
    this.photographerService.getPhotographer(id).subscribe(
      photographer => this.photographer = photographer,
      error => this.errorMessage = <any>error);
  }


}
