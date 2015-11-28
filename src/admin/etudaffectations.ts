//etudaffectations.ts
//
import {InfoUserInfo} from '../infouserinfo';
import {EtudaffectationsModel} from '../data/etudaffectationsmodel';
//
export class Etudaffectations extends EtudaffectationsModel {
	//
	static inject() { return [InfoUserInfo]; }
	//
    constructor(userinfo: InfoUserInfo) {
        super(userinfo);
    }// constructor
}// class EtudAffViewModel
