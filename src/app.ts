// app.ts
///
import {InfoUserInfo} from './infouserinfo';
import {BaseModel} from './data/basemodel';
import {Router, RouterConfiguration} from 'aurelia-router';
import {ETUDDETAIL_ROUTE, GRPEVTDETAIL_ROUTE, ETUDEVTDETAIL_ROUTE,
ETUDNOTES_ROUTE} from './data/infoconstants';
import {IInfoRouter} from 'infodata';	
//
class AureliaInfoRouter implements IInfoRouter {
	private router: Router = null;
	constructor(rt: Router) {
		this.router = rt;
	}
	public navigate_to(xroute: string, opts?: any): any {
		if ((this.router !== undefined) && (this.router !== null)) {
			if ((xroute !== undefined) && (xroute !== null)) {
				let args: any = ((opts !== undefined) && (opts !== null)) ? opts : {};
				this.router.navigateToRoute(xroute, opts);
			}
		}
	}// navigate_to
}// class AureliaInfoRouter
//
export class App  extends BaseModel {
    public router: Router;
	//
	static inject() { return [InfoUserInfo]; }
    //
    constructor(user: InfoUserInfo) {
		super(user);
		this.router = null;
    }
    //
    public configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'InfoApp';
        config.map([
            { route: ['', 'home'], name: 'home', moduleId: './home', nav: true, title: 'Accueil' },
			{ route: 'consult', name: 'consult', moduleId: './consult/consult-router', nav: true, title: 'Consultation' },
			{ route: 'profil', name: 'profil', moduleId: './profil', nav: true, title: 'Profil' },
			{ route: 'synchro', name: 'synchro', moduleId: './synchro-view', nav: true, title: 'Synchro' },
			{ route: 'admin', name: 'admin', moduleId: './admin/admin-router', nav: true, title: 'Admin' }
			/*
			{ route: 'etudnotes/:id', name: 'etudnotes', moduleId: './consult/etudiant-notes', nav: false },
			{ route: 'etudevt/:id', name: ETUDEVTDETAIL_ROUTE, moduleId: './consult/etudeventdetail', nav: false },
			{ route: 'etud/:id', name: ETUDDETAIL_ROUTE, moduleId: './consult/etudiants-sumary', nav: false },
			{ route: 'grpevt/:id', name: 'grpevt', moduleId: './consult/groupeeventdetail', nav: false },
			{ route: 'attacheddoc/:id', name: 'attacheddoc', moduleId: './attacheddocs', nav: false }
			*/
        ]);
        this.router = router;
		let userinfo = this.userInfo;
		if ((userinfo !== undefined) && (userinfo !== null)) {
			userinfo.router = new AureliaInfoRouter(router);
		}
    }
}
