import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Flight} from '../flight.model';
import {FlightService} from '../flight.service';
import {Airplane} from '../../airplane/airplane.model';
import {AirplaneService} from '../../airplane/airplane.service';

@Component({
  moduleId: module.id,
  selector: 'app-flight-create',
  templateUrl: 'flight.create.component.html',
  styleUrls: ['flight.create.component.css']
})
export class FlightCreateComponent implements OnInit{
  flight: Flight = new Flight();
  airplanes : Airplane[];
  constructor(public dialogRef: MatDialogRef<FlightCreateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              @Inject('FlightService') private flightService: FlightService,
              @Inject('AirplaneService') private airplaneService: AirplaneService) {
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

  getAirplaneList(): void{
    this.airplaneService.read().then(res =>{
      this.airplanes = res;
    })
  }
}
