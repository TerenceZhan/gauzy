// tslint:disable: nx-enforce-module-boundaries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalsRoutingModule } from './approvals-routing.module';
import { ApprovalsComponent } from './approvals/approvals.component';
import {
	NbCardModule,
	NbCheckboxModule,
	NbButtonModule,
	NbSelectModule,
	NbDatepickerModule,
	NbContextMenuModule,
	NbIconModule,
	NbDialogModule,
	NbPopoverModule,
	NbSpinnerModule
} from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './../../../../@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TimerPickerModule } from './../../../../@shared/timer-picker/timer-picker.module';
import { ProjectSelectModule } from './../../../../@shared/project-select/project-select.module';
import { EmployeeSelectorsModule } from './../../../../@theme/components/header/selectors/employee/employee.module';
import { MomentModule } from 'ngx-moment';
import { FiltersModule } from './../../../../@shared/timesheet/filters/filters.module';
import { TaskSelectModule } from './../../../../@shared/tasks/task-select/task-select.module';
import { DialogsModule } from './../../../../@shared/dialogs';

@NgModule({
	declarations: [ApprovalsComponent],
	imports: [
		CommonModule,
		ApprovalsRoutingModule,
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
		NbIconModule,
		EmployeeSelectorsModule,
		NbPopoverModule,
		MomentModule,
		FiltersModule,
		NbSpinnerModule,
		DialogsModule
	]
})
export class ApprovalsModule {}
