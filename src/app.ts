// app.ts
///
import {Router, RouterConfiguration} from 'aurelia-router';
//
export class App {
	public router: Router;
	//
	//
	constructor() {
		this.router = null;
	}
	//
	public configureRouter(config: RouterConfiguration, router: Router) {
		config.title = 'InfoApp';
		config.map([
			{ route: ['', 'home'], name: 'home', moduleId: './home', nav: true, title: 'Accueil' }
		]);
		this.router = router;
	}
}
