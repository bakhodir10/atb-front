import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CompanyComponent} from './company/company.component';
import {AboutComponent} from 'app/about/about.component';
import {CompanyServiceImpl} from './company/company.service.impl';
import {AppRouteModule} from './app.route.module';
import {CustomerComponent} from './customer/customer.component';
import {CustomerService} from './customer/customer.service';
import {CostumerServiceImpl} from './customer/customer.service.impl';
import {FlightComponent} from './flight/flight.component';
import {FlightServiceImpl} from './flight/flight.service.impl';
import {AirportComponent} from './airport/airport.component';
import {AirportServiceImpl} from './airport/airport.service.impl';
import {AirplaneServiceImpl} from './airplane/airplane.service.impl';
import {AirplaneComponent} from './airplane/airplane.component';
import {BookingComponent} from './booking/booking.component';
import {BookingServiceImpl} from './booking/booking.service.impl';
import {LoginComponent} from './login/login.component';
import {AuthService} from './login/auth.service';
import {FormsModule} from '@angular/forms';
import {AdminComponent} from './admin/admin.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {AirportCreateComponent} from './airport/create/airport.create.component';
import {MatDialogModule} from '@angular/material'
import {CompanyAdminComponent} from './com-admin/company.admin.component';
import {AirplaneListComponent} from './airplane/airplane-list/airplane-list.component';
import {FlightListComponent} from './flight/flight-list/flight-list.component';
import {AirplaneCreateComponent} from './airplane/airplane-create/airplane.create.component';
import {FlightCreateComponent} from './flight/flight-create/flight.create.component';

@NgModule({
  declarations: [
    AppComponent, CompanyComponent, AboutComponent, CustomerComponent,
    FlightComponent, AirportComponent, AirplaneComponent, BookingComponent,
    LoginComponent, AdminComponent, AirportCreateComponent, CompanyAdminComponent,
    AirplaneListComponent, FlightListComponent, AirplaneCreateComponent, FlightCreateComponent
  ],
  imports: [
    BrowserAnimationsModule, MatDialogModule, MatButtonModule, MatCheckboxModule, BrowserModule,
    HttpModule, AppRouteModule, FormsModule
  ],
  providers: [
    {
      provide: 'CompanyService',
      useClass: CompanyServiceImpl
    },
    {
      provide: 'CustomerService',
      useClass: CostumerServiceImpl
    },
    {
      provide: 'FlightService',
      useClass: FlightServiceImpl
    },
    {
      provide: 'AirportService',
      useClass: AirportServiceImpl
    },
    {
      provide: 'AirplaneService',
      useClass: AirplaneServiceImpl
    },
    {
      provide: 'BookingService',
      useClass: BookingServiceImpl
    },
    AuthService
  ],
  entryComponents: [
    AirportCreateComponent, AirplaneCreateComponent, FlightCreateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
