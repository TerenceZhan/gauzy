import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	NbButtonModule,
	NbCardModule,
	NbIconModule,
	NbInputModule,
	NbSpinnerModule,
	NbCheckboxModule
} from '@nebular/theme';
import { ManageAppointmentRoutingModule } from './manage-appointment-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ManageAppointmentComponent } from './manage-appointment.component';
import { ThemeModule } from './../../../../@theme/theme.module';
import { TimerPickerModule } from './../../../../@shared/timer-picker/timer-picker.module';
import { SharedModule } from './../../../../@shared/shared.module';
import { EmployeeMultiSelectModule } from './../../../../@shared/employee/employee-multi-select/employee-multi-select.module';
import { AlertModalModule } from './../../../../@shared/alert-modal/alert-modal.module';
import { AppointmentEmployeesService } from './../../../../@core/services/appointment-employees.service';
import { EmployeeSchedulesModule } from '../employee-schedules/employee-schedules.module';
import { TranslateModule } from './../../../../@shared/translate/translate.module';

@NgModule({
	imports: [
		ThemeModule,
		ManageAppointmentRoutingModule,
		NbCardModule,
		FormsModule,
		NbButtonModule,
		NbInputModule,
		AlertModalModule,
		EmployeeSchedulesModule,
		ReactiveFormsModule,
		NbIconModule,
		NbSpinnerModule,
		TimerPickerModule,
		NbCheckboxModule,
		SharedModule,
		EmployeeMultiSelectModule,
		NgSelectModule,
		TranslateModule
	],
	exports: [ManageAppointmentComponent],
	declarations: [ManageAppointmentComponent],
	providers: [AppointmentEmployeesService]
})
export class ManageAppointmentModule {}
