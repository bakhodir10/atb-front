import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Flight} from '../flight.model';
import {FlightService} from '../flight.service';
import {AirportService} from '../../airport/airport.service';
import {Airport} from '../../airport/airport.model';

@Component({
  moduleId: module.id,
  selector: 'app-flight-create',
  templateUrl: 'flight.create.component.html',
  styleUrls: ['flight.create.component.css']
})
export class FlightCreateComponent implements OnInit{
  flight: Flight = new Flight();
  airports : Airport[];
  constructor(public dialogRef: MatDialogRef<FlightCreateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              @Inject('FlightService') private flightService: FlightService,
              @Inject('AirportService') private airportService: AirportService) {
  }
  ngOnInit(): void {
    this.getAirplaneList();

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.flightService.create(this.flight).then(res => {
      this.dialogRef.close(res);
    })
  }

  change():void{

  }

  getAirplaneList(): void{
    this.airportService.read().then(res =>{
      this.airports = res;
      console.log(res);
    })
  }
}
