import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppUrlActivityRoutingModule } from './app-url-activity-routing.module';
import { AppUrlActivityComponent } from './app-url-activity/app-url-activity.component';
import { FiltersModule } from './../../../../@shared/timesheet/filters/filters.module';
import { NbSpinnerModule } from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './../../../../@shared/shared.module';
import { ActivityItemModule } from './../../../../@shared/timesheet/activities/activity-item/activity-item.module';

@NgModule({
	declarations: [AppUrlActivityComponent],
	imports: [
		CommonModule,
		AppUrlActivityRoutingModule,
		FiltersModule,
		NbSpinnerModule,
		TranslateModule,
		SharedModule,
		ActivityItemModule
	]
})
export class AppUrlActivityModule {}
