import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from './shared/index';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})

export class AppComponent {
	private viewContainerRef: ViewContainerRef;
	public constructor(viewContainerRef:ViewContainerRef, private router:Router) {
		// You need this small hack in order to catch application root view container ref
		this.viewContainerRef = viewContainerRef;
		console.log('Environment config', Config);

		//this.router = router;
		if (this.detectIE()) { 
			console.log('IE');
			this.router.navigateByUrl('/');
		} else {
			console.log('not IE');
		//	router.navigate(['dashboard/home'], { relativeTo: this.route }).then(resolve=>console.log(router));
			this.router.navigateByUrl('/signup');
		}
	}
detectIE(){

	
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

  // IE 12 / Spartan
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

  // Edge (IE 12+)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    //return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	return true;
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
	return true;
    //return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
	return true;
    //return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}
	
}
