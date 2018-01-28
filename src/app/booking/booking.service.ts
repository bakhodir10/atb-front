import {BaseService} from '../base/base.service';
import {Booking} from './booking.model';
import {Customer} from '../customer/customer.model';
import {Flight} from '../flight/flight.model';

export interface BookingService extends BaseService<Booking> {
  bookFlight(customer: Customer, flight : Flight);
}
