import {BaseModel} from '../base/base.model';

export class Customer extends BaseModel{
  fullName: string;
  email: string;
  dob: Date;
}
