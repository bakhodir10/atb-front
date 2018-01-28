import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import * as  data from './../app.config';
import {AirplaneService} from './airplane.service';
import {Airplane} from './airplane.model';

@Injectable()
export class AirplaneServiceImpl implements AirplaneService{

  constructor(public http: Http) {
  }

  create(entity: Airplane): Promise<Airplane> {
    const url = data.default.server + data.default.port + data.default.url + '/airplanes';
    return this.http.post(url + '/create', entity)
      .toPromise()
      .then(res => res.json() as Airplane)
  }

  read(): Promise<Airplane[]> {
    const url = data.default.server + data.default.port + data.default.url + '/airplanes';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Airplane[])
  }

  findOne(id: number): Promise<Airplane> {
    return null;
  }

  update(id: number, entity: Airplane): Promise<Airplane> {
    return null;
  }

  delete(id: number): Promise<void> {
    return null;
  }
}
