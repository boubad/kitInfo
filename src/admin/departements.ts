//departements.ts
//
import {UserInfo} from '../data/userinfo';
import {DepartementsModel} from '../data/departementsmodel';
//
export class Departements extends DepartementsModel {
	//
	static inject() { return [UserInfo]; }
	//
    constructor(info: UserInfo) {
        super(info);
    }// constructor
}// class Departements
