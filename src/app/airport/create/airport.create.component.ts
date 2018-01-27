import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'app-airport-create',
  templateUrl: 'airport.create.component.html',
  styleUrls: ['airport.create.component.css']
})
export class AirportCreateComponent{

  constructor(
    public dialogRef: MatDialogRef<AirportCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
