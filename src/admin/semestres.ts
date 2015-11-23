//semestres.ts
//
import {UserInfo} from '../data/userinfo';
import {SemestresModel} from '../data/semestresmodel';
//
export class Semestres extends SemestresModel {
	//
	static inject() { return [UserInfo]; }
	//
    constructor(info: UserInfo) {
        super(info);
    }// constructor
}// class SEmestres
