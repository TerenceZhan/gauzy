// tslint:disable: nx-enforce-module-boundaries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyRoutingModule } from './daily-routing.module';
import {
	NbCardModule,
	NbCheckboxModule,
	NbButtonModule,
	NbSelectModule,
	NbDatepickerModule,
	NbContextMenuModule,
	NbIconModule,
	NbDialogModule,
	NbSpinnerModule,
	NbPopoverModule
} from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './../../../../@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TimerPickerModule } from './../../../../@shared/timer-picker/timer-picker.module';
import { ProjectSelectModule } from './../../../../@shared/project-select/project-select.module';
import { EmployeeSelectorsModule } from './../../../../@theme/components/header/selectors/employee/employee.module';
import { DailyComponent } from './daily/daily.component';
import { EditTimeLogModalModule } from './../../../../@shared/timesheet/edit-time-log-modal/edit-time-log-modal.module';
import { FiltersModule } from './../../../../@shared/timesheet/filters/filters.module';
import { ViewTimeLogModule } from './../../../../@shared/timesheet/view-time-log/view-time-log.module';
import { ViewTimeLogModalModule } from './../../../../@shared/timesheet/view-time-log-modal/view-time-log-modal.module';
import { TaskSelectModule } from './../../../../@shared/tasks/task-select/task-select.module';
import { DialogsModule } from './../../../../@shared/dialogs';

@NgModule({
	declarations: [DailyComponent],
	imports: [
		CommonModule,
		DailyRoutingModule,
		NbCardModule,
		TranslateModule,
		NbCheckboxModule,
		NbButtonModule,
		NbSelectModule,
		SharedModule,
		NbDatepickerModule,
		FormsModule,
		NbContextMenuModule,
		NbIconModule,
		NbDialogModule,
		TimerPickerModule,
		TaskSelectModule,
		ProjectSelectModule,
		EditTimeLogModalModule,
		ViewTimeLogModalModule,
		NbIconModule,
		EmployeeSelectorsModule,
		FiltersModule,
		NbSpinnerModule,
		ViewTimeLogModule,
		NbPopoverModule,
		DialogsModule
	]
})
export class DailyModule {}
