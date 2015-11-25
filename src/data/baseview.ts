//baseview.ts
import {BaseModel} from './basemodel';
import {UserInfo} from './userinfo';
//
export class BaseView extends BaseModel {
	constructor(user: UserInfo) {
		super(userinfo);
	}// constructor
}
public activate(params?: any, config?: any, instruction?: any): any {
		this.in_activate = true;
		return this.perform_activate().then((x) => {
			this.in_activate = false;
			return this.refreshAll();
		}).catch((e) => {
			this.in_activate = false;
			return false;
		});
	}// activate