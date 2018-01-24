import {Injectable} from '@angular/core';
import {Company} from './company.model';
import {Http} from '@angular/http';
import {CompanyService} from './company.service';
import * as  data from './../app.config';

@Injectable()
export class CompanyServiceImpl implements CompanyService {
  constructor(private http: Http) {
      // super(data.default.server + data.default.port + data.default.url + '/companies', http);
  }


  create(entity: Company): Promise<Company> {
    const url = data.default.server + data.default.port + data.default.url + '/companies';
    return this.http.post(url + '/create', JSON.stringify(entity))
      .toPromise()
      .then(res => res.json() as Company)
  }


  read(): Promise<Company[]> {
    const url = data.default.server + data.default.port + data.default.url + '/companies';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Company[])
  }

  findOne(id: number): Promise<Company> {
    const url = data.default.server + data.default.port + data.default.url + '/companies';
    return this.http.get(url).toPromise()
      .then(res => res.json() as Company)
  }

  update(id: number, entity: Company): Promise<Company> {
    const url = data.default.server + data.default.port + data.default.url + '/companies';
    return this.http.put(url, JSON.stringify(entity))
      .toPromise()
      .then(res => res.json() as Company)
  }

  delete(id: number): Promise<void> {
    const url = data.default.server + data.default.port + data.default.url + '/companies';
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
  }

  verify(id:number): void {
    const url = data.default.server + data.default.port + data.default.url + '/companies';
      this.http.post(url + '/verify', JSON.stringify(id))
        .toPromise()
        .then(res => {})
  }
}
