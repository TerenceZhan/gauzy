import { ThemeModule } from '../../../../@theme/theme.module';
import { NgModule } from '@angular/core';
import { NbCardModule, NbButtonModule } from '@nebular/theme';
import { TimezoneSelectorComponent } from './timezone-selector.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from './../../../../@shared/translate/translate.module';

@NgModule({
	imports: [
		ThemeModule,
		NbCardModule,
		ReactiveFormsModule,
		FormsModule,
		NbButtonModule,
		NgSelectModule,
		TranslateModule
	],
	exports: [TimezoneSelectorComponent],
	declarations: [TimezoneSelectorComponent],
	entryComponents: [TimezoneSelectorComponent],
	providers: []
})
export class TimezoneSelectorModule {}
