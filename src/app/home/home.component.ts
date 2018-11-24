import { Component, OnInit } from '@angular/core';
import{Photographer} from '../photographer.model';


import { PhotographerService } from '../services/photographer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredPhotographers = this.listFilter ? this.performFilter(this.listFilter) : this.photographers;
  }
  filteredPhotographers: Photographer[]=[];


  photographers: Photographer[]=[];
   

  constructor(private photographerService: PhotographerService) { }

  ngOnInit(): void {
    this.photographerService.getPhotographers().subscribe(
      photographers => {
        this.photographers = photographers;
        this.filteredPhotographers=this.photographers;
      },
     
    );
  }

  performFilter(filterBy: string): Photographer[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.photographers.filter((photographer: Photographer) =>
      photographer.location.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
