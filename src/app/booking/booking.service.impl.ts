import {Injectable} from '@angular/core';
import {BaseServiceImpl} from '../base/base.service.impl';
import {Http} from '@angular/http';
import * as  data from './../app.config';
import {Booking} from './booking.model';
import {BookingService} from './booking.service';
import {Customer} from '../customer/customer.model';
import {Flight} from '../flight/flight.model';

@Injectable()
export class BookingServiceImpl implements BookingService{

  constructor(public http: Http) {
  }
  create(entity: Booking): Promise<Booking> {
    const url = data.default.server + data.default.port + data.default.url + '/bookings';
    return this.http.post(url + '/create', entity)
      .toPromise()
      .then(res => res.json() as Booking)
  }

  read(): Promise<Booking[]> {
    const url = data.default.server + data.default.port + data.default.url + '/bookings';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Booking[])
  }

  update(id: number, entity: Booking): Promise<Booking> {
    return null;
  }

  delete(id: number): Promise<void> {
    return null;
  }

  findOne(id: number): Promise<Booking> {
    return null;
  }
}
