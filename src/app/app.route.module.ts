import {RouterModule, Routes} from '@angular/router';
import {CompanyComponent} from './company/company.component';
import {AboutComponent} from './about/about.component';
import {NgModule} from '@angular/core';
import {CustomerComponent} from './customer/customer.component';
import {FlightComponent} from './flight/flight.component';
import {AirportComponent} from './airport/airport.component';
import {AirplaneComponent} from './airplane/airplane.component';
import {BookingComponent} from './booking/booking.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {CompanyAdminComponent} from './com-admin/company.admin.component';
import {Airplane} from './airplane/airplane.model';
import {AirplaneListComponent} from './airplane/airplane-list/airplane-list.component';
import {FlightListComponent} from './flight/flight-list/flight-list.component';

const routes: Routes = [
  {path: '', component: FlightComponent},
  {path: 'about', component: AboutComponent},
  {path: 'customers', component: CustomerComponent,},
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'airports', component: AirportComponent},
      {path: 'companies', component: CompanyComponent},
    ]
  },
  {
    path: 'com-admin',
    component: CompanyAdminComponent,
    children: [
      {path: 'airplane-list', component: AirplaneListComponent},
      {path: 'flight-list', component: FlightListComponent}
    ]
  },
  {path: 'airplanes', component: AirplaneComponent},
  {path: 'bookings', component: BookingComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteModule {
}
