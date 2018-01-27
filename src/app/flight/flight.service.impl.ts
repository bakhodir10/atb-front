import {Injectable} from '@angular/core';
import {Flight} from './flight.model';
import {BaseServiceImpl} from '../base/base.service.impl';
import {Http} from '@angular/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import * as  data from './../app.config';
import {FlightService} from './flight.service';

@Injectable()
export class FlightServiceImpl implements FlightService {
  dateStr : String;
  create(entity: Flight): Promise<Flight> {
    return undefined;
  }

  read(): Promise<Flight[]> {
    return undefined;
  }

  findOne(id: number): Promise<Flight> {
    return undefined;
  }

  update(id: number, entity: Flight): Promise<Flight> {
    return undefined;
  }

  delete(id: number): Promise<void> {
    return undefined;
  }
  // http:Http;
  // url:string = data.default.server + data.default.port + data.default.url + '/flights';

  constructor(private http: Http) {
    // super(data.default.server + data.default.port + data.default.url + '/flights', http);
    // this.http = http;
  }

  search(flyingFrom: string, flyingTo: string, date : Date): Promise<Flight[]>{
    if(date == null || date === undefined){
      date = new Date();
      this.dateStr = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    }
    else{
      this.dateStr = date.toString().replace('-','/').replace('-','/');
    }

    let url = data.default.server + data.default.port + data.default.url + '/flights/search';
    url += '?flyingFrom=' + flyingFrom + '&flyingTo=' + flyingTo + '&date=' + this.dateStr;
    console.log(url);
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Flight[])
  }
}
