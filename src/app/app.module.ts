import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CompanyComponent} from './company/company.component';
import {AboutComponent} from 'app/about/about.component';
import {CompanyServiceImpl} from './company/company.service.impl';
import {AppRouteModule} from './app.route.module';

@NgModule({
  declarations: [
    AppComponent, CompanyComponent, AboutComponent
  ],
  imports: [
    BrowserModule, HttpModule, AppRouteModule
  ],
  providers: [
    {
      provide: 'CompanyService',
      useClass: CompanyServiceImpl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
