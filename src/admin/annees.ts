//annees.ts
//
import {UserInfo} from '../data/userinfo';
import {AnneesModel} from '../data/anneesmodel';
//
export class Annees extends AnneesModel {
	//
	static inject() { return [UserInfo]; }
	//
    constructor(info: UserInfo) {
        super(info);
    }// constructor
}// class Annees
