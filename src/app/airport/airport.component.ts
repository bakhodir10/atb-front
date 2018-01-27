import {Component, Inject, OnInit} from '@angular/core';
import {AirportCreateComponent} from './create/airport.create.component';
import {MatDialog} from '@angular/material';
import {Airport} from './airport.model';
import {AirportService} from './airport.service';

@Component({
  moduleId: module.id,
  selector: 'app-airport',
  templateUrl: 'airport.component.html',
  styleUrls: ['airport.component.css']
})
export class AirportComponent implements OnInit {
  airports: Airport[];

  ngOnInit(): void {
    this.getList();
  }

  constructor(public dialog: MatDialog,
              @Inject('AirportService') private airportService: AirportService) {
  }

  getList(): void {
    this.airportService.read().then(res => {
      console.log(res);
      this.airports = res
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AirportCreateComponent, {
      height: '200px',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
