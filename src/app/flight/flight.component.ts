import {Component, Inject, OnInit} from '@angular/core';
import {Flight} from './flight.model';
import { FormsModule } from '@angular/forms';
import {CompanyService} from '../company/company.service';
import {FlightService} from './flight.service';

@Component({
  moduleId: module.id,
  selector: 'app-flight',
  templateUrl: 'flight.component.html',
  styleUrls: ['flight.component.css']
})
export class FlightComponent implements OnInit{
  flight:Flight = new Flight();
  flights: Flight[] = [];
  showModal = false;
  ngOnInit(): void {
  }

  constructor(@Inject('FlightService') private flightService: FlightService){
  }

  searchFlight(){
   this.flightService.search(this.flight.locationFrom, this.flight.locationTo, this.flight.date).then(values => {
     this.flights = values;
     console.log(this.flights);
   });
  }
}
