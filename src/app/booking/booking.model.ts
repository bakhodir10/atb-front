import {BaseModel} from '../base/base.model';
import {Customer} from '../customer/customer.model';

export class Booking extends BaseModel{
  customer:Customer;
}
