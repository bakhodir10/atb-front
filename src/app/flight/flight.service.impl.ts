import {Injectable} from '@angular/core';
import {Flight} from './flight.model';
import {BaseServiceImpl} from '../base/base.service.impl';
import {Http} from '@angular/http';
import * as  data from './../app.config';
import {FlightService} from './flight.service';

@Injectable()
export class FlightServiceImpl extends BaseServiceImpl<Flight> implements FlightService {
  constructor(http: Http) {
    super(data.default.server + data.default.port + data.default.url + '/flights', http);
  }
}
