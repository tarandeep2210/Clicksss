import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // checkdata: any;

  constructor() { }
  updatedata = new Subject();
  checkdata = new Subject();
}
