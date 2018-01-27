import {Flight} from './flight.model';
import {BaseService} from '../base/base.service';

export interface FlightService extends BaseService<Flight> {
  search(flyingFrom: string, flyingTo: string, date : Date): Promise<Flight[]>;
}
