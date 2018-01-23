import {RouterModule, Routes} from '@angular/router';
import {CompanyComponent} from './company/company.component';
import {AboutComponent} from './about/about.component';
import {NgModule} from '@angular/core';

const routes : Routes = [
  {path: 'companies', component: CompanyComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class  AppRouteModule{}
