import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { LoginModule } from './login/login.module';

import { SignupModule } from './signup/signup.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { DetectIEComponent } from './detect-id/detect-ie.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(routes,{initialNavigation: false}),
		LoginModule,
		SignupModule,
		DashboardModule,
		SharedModule.forRoot(),
			],
	declarations: [AppComponent,DetectIEComponent],
	providers: [{
		provide: APP_BASE_HREF,
		useValue: '<%= APP_BASE %>'
	}],
	bootstrap: [AppComponent]

})

export class AppModule { }
