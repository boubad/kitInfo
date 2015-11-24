//home.ts
import {HomeModel} from './data/homemodel';
import {InfoUserInfo} from './infouserinfo';
import {Validation, ValidationGroup} from 'aurelia-validation';

//
export class Home extends HomeModel {
	//
	static inject() { return [InfoUserInfo, Validation] }
	//
	public validation: ValidationGroup;
	//
	constructor(info: InfoUserInfo, val: Validation) {
		super(info);
		if ((val !== undefined) && (val !== null)) {
		
			this.validation = val.on(this)
				.ensure('username')
				.isNotEmpty()
				.hasMinLength(3)
				.hasMaxLength(10)
				.ensure('password')
				.isNotEmpty()
				.hasMinLength(3)
				.hasMaxLength(10);
		}
	}
	public perform_login(): any {
		if ((this.validation !== undefined) && (this.validation !== null)){
			this.validation.validate().then((x)=>{
				return super.perform_login();
			}).catch((e)=>{
				return false;
			});
		} else {
			return super.perform_login();
		}
	}
}// class Home

