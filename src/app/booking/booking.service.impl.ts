import {Injectable} from '@angular/core';
import {BaseServiceImpl} from '../base/base.service.impl';
import {Http} from '@angular/http';
import * as  data from './../app.config';
import {Booking} from './booking.model';
import {BookingService} from './booking.service';

@Injectable()
export class BookingServiceImpl extends BaseServiceImpl<Booking> implements BookingService{
  constructor(http: Http) {
    super(data.default.server + data.default.port + data.default.url + '/bookings', http);
  }
}
