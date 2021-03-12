import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { EmployeeSelectorComponent } from './employee.component';
import { EmployeesService } from './../../../../../@core/services/employees.service';
import { EmployeeStore } from './../../../../../@core/services/employee-store.service';
import { TranslateModule } from './../../../../../@shared/translate/translate.module';

const COMPONENTS = [EmployeeSelectorComponent];

@NgModule({
	imports: [CommonModule, NgSelectModule, FormsModule, TranslateModule],
	exports: [...COMPONENTS],
	declarations: [...COMPONENTS],
	providers: [EmployeesService, EmployeeStore]
})
export class EmployeeSelectorsModule {}
