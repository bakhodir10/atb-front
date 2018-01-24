import {Injectable} from '@angular/core';
import {BaseServiceImpl} from '../base/base.service.impl';
import {Http} from '@angular/http';
import * as  data from './../app.config';
import {Airport} from './airport.model';
import {AirportService} from './airport.service';

@Injectable()
export class AirportServiceImpl extends BaseServiceImpl<Airport> implements AirportService{
  constructor(http: Http) {
    super(data.default.server + data.default.port + data.default.url + '/airports', http);
  }
}
