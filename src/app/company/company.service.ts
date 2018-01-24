import {Company} from './company.model';
import {BaseService} from '../base/base.service';

export interface CompanyService extends BaseService<Company> {
  verify(id:number): void;
}
