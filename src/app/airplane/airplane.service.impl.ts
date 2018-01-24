import {Injectable} from '@angular/core';
import {BaseServiceImpl} from '../base/base.service.impl';
import {Http} from '@angular/http';
import * as  data from './../app.config';
import {AirplaneService} from './airplane.service';
import {Airplane} from './airplane.model';

@Injectable()
export class AirplaneServiceImpl extends BaseServiceImpl<Airplane> implements AirplaneService{
  constructor(http: Http) {
    super(data.default.server + data.default.port + data.default.url + '/airplanes', http);
  }
}
