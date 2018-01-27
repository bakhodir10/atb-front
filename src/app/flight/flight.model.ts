import {BaseModel} from '../base/base.model';
import {Airport} from '../airport/airport.model';

export class Flight extends BaseModel{
  date: Date;
  price: number;
  from : Airport;
  to : Airport;
  time : string;
  locationFrom : string;
  locationTo : string;
}
