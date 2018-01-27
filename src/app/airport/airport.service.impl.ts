import {Injectable} from '@angular/core';
import {BaseServiceImpl} from '../base/base.service.impl';
import {Http} from '@angular/http';
import * as  data from './../app.config';
import {Airport} from './airport.model';
import {AirportService} from './airport.service';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class AirportServiceImpl implements AirportService {

  constructor(public http: Http) {
  }

  create(entity: Airport): Promise<Airport> {
    const url = data.default.server + data.default.port + data.default.url + '/airports';
    return this.http.post(url + '/create', entity)
      .toPromise()
      .then(res => res.json() as Airport)
  }

  read(): Promise<Airport[]> {
    const url = data.default.server + data.default.port + data.default.url + '/airports';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Airport[])
  }

  findOne(id: number): Promise<Airport> {
    return null;
  }

  update(id: number, entity: Airport): Promise<Airport> {
    return null;
  }

  delete(id: number): Promise<void> {
    return null;
  }
}
