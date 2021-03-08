import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeAndActivitiesRoutingModule } from './time-and-activities-routing.module';
import { TimeAndActivitiesComponent } from './time-and-activities/time-and-activities.component';
import { DailyGridModule } from './../../../../@shared/report/daily-grid/daily-grid.module';
import { SharedModule } from './../../../../@shared/shared.module';
import { FiltersModule } from './../../../../@shared/timesheet/filters/filters.module';
import { DailyStatisticsModule } from './../../../../@shared/report/daily-statistics/daily-statistics.module';

@NgModule({
	declarations: [TimeAndActivitiesComponent],
	imports: [
		CommonModule,
		TimeAndActivitiesRoutingModule,
		DailyGridModule,
		DailyStatisticsModule,
		SharedModule,
		FiltersModule
	]
})
export class TimeAndActivitiesModule {}
