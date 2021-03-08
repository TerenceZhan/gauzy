// NOTE: Auto-generated file
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses 'environment.ts', but if you do
// 'ng build --env=prod' then 'environment.prod.ts' will be used instead.
// The list of which env maps to which file can be found in '.angular-cli.json'.

import { Environment } from './model';
import { CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { ElectronService } from 'ngx-electron';

let API_BASE_URL = 'http://localhost:3000';
let CLIENT_BASE_URL = 'http://localhost:4200';

let IS_ELECTRON = false;
let IS_INTEGRATED_DESKTOP = false;

// https://github.com/electron/electron/issues/2288#issuecomment-337858978
const userAgent = navigator.userAgent.toLowerCase();
if (userAgent.indexOf(' electron/') > -1) {
	try {
		const el: ElectronService = new ElectronService();
		const variableGlobal = el.remote.getGlobal('variableGlobal');
		API_BASE_URL = variableGlobal.API_BASE_URL;
		IS_ELECTRON = true;
		IS_INTEGRATED_DESKTOP = variableGlobal.IS_INTEGRATED_DESKTOP;
	} catch (e) {}
}

export const environment: Environment = {
	production: false,

	API_BASE_URL: API_BASE_URL,
	CLIENT_BASE_URL: CLIENT_BASE_URL,

	COMPANY_NAME: 'Ever Co. LTD',
	COMPANY_SITE: 'Gauzy',
	COMPANY_LINK: 'https://ever.co/',
	COMPANY_SITE_LINK: 'https://gauzy.co',
	COMPANY_GITHUB_LINK: 'https://github.com/ever-co',
	COMPANY_FACEBOOK_LINK: 'https://www.facebook.com/gauzyplatform',
	COMPANY_TWITTER_LINK: 'https://twitter.com/gauzyplatform',
	COMPANY_LINKEDIN_LINK: 'https://www.linkedin.com/company/ever-co.',

	CLOUDINARY_CLOUD_NAME: '',
	CLOUDINARY_API_KEY: '',

	GOOGLE_AUTH_LINK: API_BASE_URL + '/api/auth/google',
	FACEBOOK_AUTH_LINK: API_BASE_URL + '/api/auth/facebook',
	LINKEDIN_AUTH_LINK: API_BASE_URL + '/api/auth/linkedin',
	GITHUB_AUTH_LINK: API_BASE_URL + '/api/auth/github',
	TWITTER_AUTH_LINK: API_BASE_URL + '/api/auth/twitter',
	MICROSOFT_AUTH_LINK: API_BASE_URL + '/api/auth/microsoft',
	AUTH0_AUTH_LINK: API_BASE_URL + '/api/auth/auth0',

	NO_INTERNET_LOGO: 'assets/images/logos/logo_Gauzy.svg',

	SENTRY_DSN: '',

	HUBSTAFF_REDIRECT_URI: CLIENT_BASE_URL + '/pages/integrations/hubstaff',

	IS_ELECTRON: IS_ELECTRON,
	IS_INTEGRATED_DESKTOP: IS_INTEGRATED_DESKTOP,

	GOOGLE_MAPS_API_KEY: 'AIzaSyATV9qayPdPY8GHlyc0wPIr1r7AyW5UIwQ',
	GOOGLE_PLACE_AUTOCOMPLETE: true,

	DEFAULT_LATITUDE: 42.6459136,
	DEFAULT_LONGITUDE: 23.3332736,
	DEFAULT_CURRENCY: 'USD',

	DEMO: true,

	CHATWOOT_SDK_TOKEN: ''
};

export const cloudinaryConfiguration: CloudinaryConfiguration = {
	cloud_name: environment.CLOUDINARY_CLOUD_NAME,
	api_key: environment.CLOUDINARY_API_KEY
};

// For easier debugging in development mode, you can import the following file
// to ignore zone related error stack frames such as 'zone.run', 'zoneDelegate.invokeTask'.
import 'zone.js/dist/zone-error'; // Included with Angular CLI.
