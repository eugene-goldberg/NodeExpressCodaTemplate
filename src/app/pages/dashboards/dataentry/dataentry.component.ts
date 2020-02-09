import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DataService} from '../../../services/data.service';
import { DevopsPipeline } from './pipeline';

@Component({
  selector: 'page-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.scss']
})
export class PageDataentryComponent implements OnInit {
    pipeline = new DevopsPipeline(null, null, null, null, null, null, null, null);

    constructor(public dataService: DataService) { }

    ngOnInit() {
    }

    save(customerForm: NgForm) {
      console.log(customerForm.form);
      this.pipeline.company_name = customerForm.value.companyName;
      this.pipeline.program_name = customerForm.value.programName;
      this.pipeline.application_name = customerForm.value.applicationName;
      this.pipeline.application_component_name = customerForm.value.applicationComponentName;
      this.pipeline.hosting_model = customerForm.value.hostingModel;
      this.pipeline.environment = customerForm.value.environment;
      this.pipeline.pipeline_name = customerForm.value.pipelineName;
      this.pipeline.pipeline_type = customerForm.value.pipelineType;
      this.dataService.addDevopsPipeline(this.pipeline);
      console.log('Saved: ' + JSON.stringify(customerForm.value));
    }
}
