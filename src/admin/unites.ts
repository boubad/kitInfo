//unites.ts
//
import {InfoUserInfo} from '../infouserinfo';
import {UnitesModel} from '../data/unitesmodel';
//
export class Unites extends UnitesModel {
	static inject() { return [InfoUserInfo]; }
	//
	constructor(info: InfoUserInfo) {
		super(info);
	}// constructor
}// class Unites