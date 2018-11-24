import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  signedin = false;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
      this.dataservice.updatedata.subscribe(
        (response: boolean) => this.signedin = response
      );
  }

  onclick() {
    this.signedin = false;
    this.dataservice.updatedata.next(this.signedin);
  }

}
