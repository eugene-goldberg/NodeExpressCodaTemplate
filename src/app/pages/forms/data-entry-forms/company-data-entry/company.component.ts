import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DataService} from '../../../../../app/services/data.service';
import { Company } from './company';

@Component({
  selector: 'company-dataentry',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyDataentryComponent implements OnInit {
    company = new Company(null);

    constructor(public dataService: DataService) { }

    ngOnInit() {
    }

    save(customerForm: NgForm) {
      console.log(customerForm.form);
      this.company.company_name = customerForm.value.companyName;
      // this.dataService.addDevopsPipeline(this.company);
      this.dataService.addCompany(this.company);
      console.log('company data entry: ' + JSON.stringify(customerForm.value));
    }
}
