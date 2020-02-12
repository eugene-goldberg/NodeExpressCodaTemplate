import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DevopsPipeline } from '../pages/dashboards/dataentry/pipeline';
import { Company } from '../pages/forms/data-entry-forms/company-data-entry/company';



@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private http: HttpClient) {}

	public getData(url: string) {
		const URL: string = url;

		return this.http.get(URL);
	}

  public handleError(error: any) {
    return observableThrowError(error.error || 'Server Error');
  }

  addDevopsPipeline (pipeline: DevopsPipeline): void {

    this.http.post('/pipelines/add', pipeline).subscribe({
      // next: data => this.postId = data.id,
      error: error => console.error('There was an error!', error)
  });
 }

 addCompany (company: Company): void {

  this.http.post('/company/add', company).subscribe({
    // next: data => this.postId = data.id,
    error: error => console.error('There was an error!', error)
});
}
}
