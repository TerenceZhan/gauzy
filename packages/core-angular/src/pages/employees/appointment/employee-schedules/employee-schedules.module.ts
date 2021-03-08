import { ThemeModule } from '../../../../@theme/theme.module';
import { NgModule } from '@angular/core';
import { NbCardModule, NbButtonModule } from '@nebular/theme';
import { EmployeeSchedulesComponent } from './employee-schedules.component';
import { TranslateModule } from './../../../../@shared/translate/translate.module';

@NgModule({
	imports: [ThemeModule, NbCardModule, NbButtonModule, TranslateModule],
	exports: [EmployeeSchedulesComponent],
	declarations: [EmployeeSchedulesComponent],
	entryComponents: [EmployeeSchedulesComponent],
	providers: []
})
export class EmployeeSchedulesModule {}
