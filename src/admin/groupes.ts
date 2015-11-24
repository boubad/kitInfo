//groupes.ts
//
import {InfoUserInfo} from '../infouserinfo';
import {GroupesModel} from '../data/groupesmodel';
//
export class Groupes extends GroupesModel {
	static inject() { return [InfoUserInfo]; }
	//
    constructor(info: InfoUserInfo) {
        super(info);
    }// constructor
}// class Unites