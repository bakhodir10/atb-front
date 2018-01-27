import {BaseModel} from '../base/base.model';

export class Flight extends BaseModel{
  date: Date;
  price: number;
  from:string;
  to:string;
}
