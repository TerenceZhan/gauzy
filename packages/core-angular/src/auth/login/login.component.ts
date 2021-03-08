import { Component, OnInit } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import { environment } from './../../environments/environment';

@Component({
	selector: 'ngx-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class NgxLoginComponent extends NbLoginComponent implements OnInit {
	environment = environment;

	ngOnInit() {
		if (this.environment.DEMO) {
			this.user.email = 'admin@ever.co';
			this.user.password = 'admin';
		}
	}
}
