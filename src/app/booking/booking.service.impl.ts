import {Injectable} from '@angular/core';
import {BaseServiceImpl} from '../base/base.service.impl';
import {Http} from '@angular/http';
import * as  data from './../app.config';
import {Booking} from './booking.model';
import {BookingService} from './booking.service';
import {Customer} from '../customer/customer.model';
import {Flight} from '../flight/flight.model';

@Injectable()
export class BookingServiceImpl extends BaseServiceImpl<Booking> implements BookingService{
  booking : Booking = new Booking();
  constructor(http: Http) {
    super(data.default.server + data.default.port + data.default.url + '/bookings', http);
  }

  bookFlight(customer: Customer, flight : Flight){
    this.booking.flight = flight;
    this.booking.customer = customer;
    console.log(this.booking);
    super.create(this.booking);
  }
}
