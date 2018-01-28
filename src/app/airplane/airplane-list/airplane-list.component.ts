import {Component, Inject, OnInit} from '@angular/core';
import {Airplane} from '../airplane.model';
import {AirplaneService} from '../airplane.service';
import {MatDialog} from '@angular/material';
import {AirplaneCreateComponent} from '../airplane-create/airplane.create.component';

@Component({
  moduleId: module.id,
  selector: 'app-airplane-list',
  templateUrl: 'airplane-list.component.html',
  styleUrls: ['airplane-list.component.css']
})
export class AirplaneListComponent implements OnInit {
  airplanes: Airplane[];
  name: string;

  constructor(public dialog: MatDialog,
              @Inject('AirplaneService') private airplaneService: AirplaneService) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.airplaneService.read().then(res => {
      this.airplanes = res;
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AirplaneCreateComponent, {
      height: '200px',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.airplanes.push(result);
      console.log('The dialog was closed');
    });
  }
}
