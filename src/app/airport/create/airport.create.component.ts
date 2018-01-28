import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Airport} from '../airport.model';
import {CompanyService} from '../../company/company.service';
import {AirportService} from '../airport.service';

@Component({
  moduleId: module.id,
  selector: 'app-airport-create',
  templateUrl: 'airport.create.component.html',
  styleUrls: ['airport.create.component.css']
})
export class AirportCreateComponent {
  airport: Airport = new Airport();

  constructor(public dialogRef: MatDialogRef<AirportCreateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              @Inject('AirportService') private airportService: AirportService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.airportService.create(this.airport).then(res => {
      this.dialogRef.close(res);
    })
  }
}
