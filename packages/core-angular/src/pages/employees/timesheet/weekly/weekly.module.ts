// tslint:disable: nx-enforce-module-boundaries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeklyRoutingModule } from './weekly-routing.module';
import { WeeklyComponent } from './weekly/weekly.component';
import { TranslateModule } from '@ngx-translate/core';
import { ShareModule } from './../../../../share/share.module';
import {
	NbDatepickerModule,
	NbIconModule,
	NbButtonModule,
	NbDialogModule,
	NbSpinnerModule,
	NbPopoverModule
} from '@nebular/theme';
import { EmployeeSelectorsModule } from './../../../../@theme/components/header/selectors/employee/employee.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../../../@shared/shared.module';
import { FiltersModule } from './../../../../@shared/timesheet/filters/filters.module';
import { EditTimeLogModalModule } from './../../../../@shared/timesheet/edit-time-log-modal/edit-time-log-modal.module';
import { ViewTimeLogModule } from './../../../../@shared/timesheet/view-time-log/view-time-log.module';

@NgModule({
	declarations: [WeeklyComponent],
	imports: [
		CommonModule,
		WeeklyRoutingModule,
		TranslateModule,
		ShareModule,
		NbDatepickerModule,
		NbIconModule,
		EmployeeSelectorsModule,
		FormsModule,
		NbButtonModule,
		SharedModule,
		FiltersModule,
		EditTimeLogModalModule,
		NbDialogModule,
		NbSpinnerModule,
		NbButtonModule,
		NbPopoverModule,
		ViewTimeLogModule
	]
})
export class WeeklyModule {}
