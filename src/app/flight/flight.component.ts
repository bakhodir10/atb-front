import {Component, OnInit} from '@angular/core';
import {Flight} from './flight.model';

@Component({
  moduleId: module.id,
  selector: 'app-flight',
  templateUrl: 'flight.component.html',
  styleUrls: ['flight.component.css']
})
export class FlightComponent implements OnInit{
  flight: Flight = new Flight();
  ngOnInit(): void {
  }
}
