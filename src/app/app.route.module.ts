import {RouterModule, Routes} from '@angular/router';
import {CompanyComponent} from './company/company.component';
import {AboutComponent} from './about/about.component';
import {NgModule} from '@angular/core';
import {CustomerComponent} from './customer/customer.component';
import {FlightComponent} from './flight/flight.component';
import {AirportComponent} from './airport/airport.component';
import {AirplaneComponent} from './airplane/airplane.component';

const routes : Routes = [
  {path: 'companies', component: CompanyComponent},
  {path: 'about', component: AboutComponent},
  {path: 'customers', component: CustomerComponent},
  {path: 'flights', component: FlightComponent},
  {path: 'airports', component: AirportComponent},
  {path: 'airplanes', component: AirplaneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class  AppRouteModule{}
