import {Component, Inject, OnInit} from '@angular/core';
import {Airplane} from './airplane.model';
import {AirportService} from '../airport/airport.service';
import {AirplaneService} from './airplane.service';

@Component({
  moduleId: module.id,
  selector: 'app-airplane',
  templateUrl: 'airplane.component.html',
  styleUrls: ['airplane.component.css']
})
export class AirplaneComponent implements OnInit{
  airplane: Airplane;
  name:string;

  constructor(@Inject('AirplaneService') private airplaneService: AirplaneService) {
  }
  ngOnInit(): void {
  }

  save():void{
    this.airplane.name = 'hello';
    this.airplane.capacity = 10;
    this.airplaneService.create(this.airplane).then(res => {
      console.log(res);
    })
  }
}
