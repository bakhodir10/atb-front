import {BaseModel} from '../base/base.model';
export class Company extends BaseModel {
  name: string;
  active:boolean;
  location:string;
}
