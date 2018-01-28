import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Airplane} from '../airplane.model';
import {AirplaneService} from '../airplane.service';

@Component({
  moduleId: module.id,
  selector: 'app-airplane-create',
  templateUrl: 'airplane.create.component.html',
  styleUrls: ['airplane.create.component.css']
})
export class AirplaneCreateComponent{
  airplane: Airplane = new Airplane();

  constructor(public dialogRef: MatDialogRef<AirplaneCreateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              @Inject('AirplaneService') private airplaneService: AirplaneService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.airplaneService.create(this.airplane).then(res => {
      this.dialogRef.close(res);
    })
  }
}
