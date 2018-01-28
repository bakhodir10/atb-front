import {Component, Inject, OnInit} from '@angular/core';
import {Flight} from '../flight.model';
import {FlightService} from '../flight.service';
import {MatDialog} from '@angular/material';
import {FlightCreateComponent} from '../flight-create/flight.create.component';

@Component({
  moduleId: module.id,
  selector: 'app-flight-list',
  templateUrl: 'flight-list.component.html',
  styleUrls: ['flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flights: Flight[];
  constructor(public dialog: MatDialog,
    @Inject('FlightService') private flightService: FlightService) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.flightService.read().then(res => {
      this.flights = res;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FlightCreateComponent, {
      height: '200px',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
