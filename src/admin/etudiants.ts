//etudiants.ts
//
import {InfoUserInfo} from '../infouserinfo';
import {EtudiantsModel} from '../data/etudiantsmodel';
//
export class Etudiants extends EtudiantsModel {
	//
	static inject() { return [InfoUserInfo]; }
	 //
    constructor(info: InfoUserInfo) {
        super(info);
    }// constructor
}// class Etudiants
