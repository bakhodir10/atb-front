import {Component, Inject, OnInit} from '@angular/core';
import {AirportCreateComponent} from './create/airport.create.component';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'app-airport',
  templateUrl: 'airport.component.html',
  styleUrls: ['airport.component.css']
})
export class AirportComponent{

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AirportCreateComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
