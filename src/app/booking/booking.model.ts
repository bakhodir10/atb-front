import {BaseModel} from '../base/base.model';
import {Customer} from '../customer/customer.model';
import {Flight} from '../flight/flight.model';

export class Booking extends BaseModel{
  customer : Customer;
  flight : Flight;
}
