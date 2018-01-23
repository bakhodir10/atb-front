import {Component, Inject, OnInit} from '@angular/core';
import {Company} from './company.model';
import {CompanyService} from 'app/company/company.service';

@Component({
  moduleId: module.id,
  selector: 'app-company',
  templateUrl: 'company.component.html',
  styleUrls: ['company.component.css']
})

export class CompanyComponent implements OnInit {
  companies: Company[];

  ngOnInit(): void {
    this.getList();
    // this.findOne(1);
  }

  constructor(@Inject('CompanyService') private companyService: CompanyService) {
  }

  getList() {
    this.companyService.read().then(res => {
      console.log(res);
      this.companies = res;
    });
  }

  findOne(id: number) {
    this.companyService.findOne(id).then(res => {
      console.log(res);
    })
  }
}
