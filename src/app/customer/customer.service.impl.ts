import {Injectable} from '@angular/core';
import {Customer} from './customer.model';
import {BaseServiceImpl} from '../base/base.service.impl';
import {Http} from '@angular/http';
import * as  data from './../app.config';
import {CustomerService} from './customer.service';

@Injectable()
export class CostumerServiceImpl extends BaseServiceImpl<Customer> implements CustomerService {
  constructor(http: Http) {
    super(data.default.server + data.default.port + data.default.url + '/customers', http);
  }
}
