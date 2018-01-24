import {Component, Inject, OnInit} from '@angular/core';
import {Airport} from './airport.model';
import {AirportService} from './airport.service';

@Component({
  moduleId: module.id,
  selector: 'app-airport',
  templateUrl: 'airport.component.html',
  styleUrls: ['airport.component.css']
})
export class AirportComponent implements OnInit{
  airports: Airport[];
  ngOnInit(): void {
    this.getList();
  }

  constructor(@Inject('AirportService') private airportService: AirportService) {
  }

  getList() {
    this.airportService.read().then(res => {
      console.log(res);
      this.airports = res;
    });
  }
}
