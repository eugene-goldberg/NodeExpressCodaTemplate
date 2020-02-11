import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UIModule } from '../ui/ui.module';
import { AgmCoreModule } from '@agm/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { PagePaginationTableComponent } from './tables/pagination-table';
import { PageSimpleTablesComponent } from './tables/simple-tables';
import { PageSortingTableComponent } from './tables/sorting-table';
import { PageSearchTableComponent } from './tables/search-table';
import { PageFilterTableComponent } from './tables/filter-table';
import { PageProgressComponent } from './ui/progresses';
import { PageCardsComponent } from './ui/cards';
import { PageAccordionsComponent } from './ui/accordions';
import { PageButtonsComponent } from './ui/buttons';
import { PageTabsComponent } from './ui/tabs';
import { PageListComponent } from './ui/lists';
import { PageFormElementsComponent } from './forms/form-elements';
import { PageToDoComponent } from './apps/to-do';
import { PageInboxComponent } from './apps/inbox';
import { PageCalendarComponent } from './apps/calendar';
import { PageInputsComponent } from './ui/inputs';
import { PageTextareasComponent } from './ui/textareas';
import { PageCheckboxesComponent } from './ui/checkboxes';
import { PageRadioButtonsComponent } from './ui/radio-buttons';
import { PageUsersComponent } from './apps/users';
import { PageContactsComponent } from './apps/contacts';
import { PageTaskboardComponent } from './apps/taskboard';
import { PageSwitchersComponent } from './ui/switchers';
import { PageAutocompletesComponent } from './ui/autocompletes';
import { PageChatComponent } from './apps/chat';
import { PageGoogleMapsComponent } from './maps/google-maps';
import { PageLeafletMapsComponent } from './maps/leaflet-maps';
import { PagePricingComponent } from './pages/pricing';
import { PageInvoiceComponent } from './pages/invoice';
import { PageNg2ChartsComponent } from './charts/ng2-charts';
import { PageNgxChartsComponent } from './charts/ngx-charts';
import { PageFaqComponent } from './pages/faq/faq.component';
import { PageBadgesComponent } from './ui/badges';
import { PageDataWidgetsComponent } from './widgets/data-widgets';
import { PageChartWidgetsComponent } from './widgets/chart-widgets';
import { PageMediaWidgetsComponent } from './widgets/media-widgets';
import { PageLoginComponent } from './extra/login';
import { PageSignUpComponent } from './extra/sign-up';
import { PageNotFoundComponent } from './extra/not-found';
import { PageInternalErrorComponent } from './extra/internal-error';
import { PageTypographyComponent } from './typography';
import { PageTimelineComponent } from './pages/timeline/timeline.component';
import { PageVTimelineComponent } from './ui/v-timeline/v-timeline.component';
import { PageSelectsComponent } from './ui/selects';
import { PageFormLayoutsComponent } from './forms/form-layouts';
import { PageFormValidationComponent } from './forms/form-validation';
import { PageIconsComponent } from './icons';
import { PageDefaultComponent } from './dashboards/default';
import { PageAnalyticalComponent } from './dashboards/analytical';
import { PageFinancialComponent } from './dashboards/financial';
import { PageSlidersComponent } from './ui/sliders';
import { PageNotificationsComponent } from './ui/notifications';
import { PageAlertsComponent } from './ui/alerts';
import { PageRatingsComponent } from './ui/ratings/ratings.component';
import { PageDropdownsComponent } from './ui/dropdowns';
import { PageTravelComponent } from './dashboards/travel';
import { PageFormWizardComponent } from './forms/form-wizard';
import { PageDataentryComponent } from './dashboards/dataentry';
import {CompanyDataentryComponent} from '../pages/forms/data-entry-forms/company-data-entry';

@NgModule({
  imports: [
		AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSvo0x8v3C6aFWcSi2zooOC9tqGCOqCj4'
		}),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
		CommonModule,
		ChartsModule,
		RouterModule,
		UIModule,
		LeafletModule.forRoot(),
		NgxChartsModule,
		FormsModule,
		ReactiveFormsModule
  ],
  declarations: [
    PageNotFoundComponent,
    PageCardsComponent,
		PageButtonsComponent,
		PageTabsComponent,
		PageAccordionsComponent,
		PageSimpleTablesComponent,
		PageProgressComponent,
		PageListComponent,
    PageFilterTableComponent,
    PageSortingTableComponent,
    PageSearchTableComponent,
    PageSortingTableComponent,
    PageFormElementsComponent,
    PagePaginationTableComponent,
    PageToDoComponent,
    PageInboxComponent,
    PageCalendarComponent,
    PageInputsComponent,
    PageTextareasComponent,
    PageCheckboxesComponent,
    PageRadioButtonsComponent,
    PageUsersComponent,
    PageContactsComponent,
    PageTaskboardComponent,
    PageSwitchersComponent,
    PageAutocompletesComponent,
    PageChatComponent,
    PageGoogleMapsComponent,
    PageLeafletMapsComponent,
    PagePricingComponent,
    PageInvoiceComponent,
		PageNg2ChartsComponent,
		PageNgxChartsComponent,
		PageFaqComponent,
		PageBadgesComponent,
		PageDataWidgetsComponent,
		PageChartWidgetsComponent,
		PageMediaWidgetsComponent,
		PageLoginComponent,
		PageSignUpComponent,
		PageNotFoundComponent,
		PageInternalErrorComponent,
		PageTypographyComponent,
    PageTimelineComponent,
    PageVTimelineComponent,
    PageSelectsComponent,
    PageFormLayoutsComponent,
    PageFormValidationComponent,
    PageIconsComponent,
    PageDefaultComponent,
    PageAnalyticalComponent,
    PageDataentryComponent,
    PageFinancialComponent,
    PageSlidersComponent,
		PageNotificationsComponent,
		PageAlertsComponent,
		PageRatingsComponent,
		PageDropdownsComponent,
		PageTravelComponent,
    PageFormWizardComponent,
    CompanyDataentryComponent
  ]
})
export class PagesModule { }
