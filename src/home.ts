//home.ts
import {HomeModel} from './data/homemodel';
import {UserInfo} from './data/userinfo';
//
export class Home extends HomeModel {
	//
	static inject() { return [UserInfo] }
	//
	constructor(info: UserInfo) {
		super(info);
	}
}// class Home

