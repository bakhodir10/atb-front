import {Injectable} from '@angular/core';
import {Company} from './company.model';
import {BaseServiceImpl} from '../base/base.service.impl';
import {Http} from '@angular/http';
import {CompanyService} from './company.service';
import * as  data from './../app.config';

@Injectable()
export class CompanyServiceImpl extends BaseServiceImpl<Company> implements CompanyService {
  constructor(http: Http) {
      super(data.default.server + data.default.port + data.default.url + '/companies', http);
  }
}
