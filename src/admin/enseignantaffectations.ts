//profaffectations.ts
//
import {InfoUserInfo} from '../infouserinfo';
import {EnseignantAffectationsModel} from '../data/enseignantaffectationsmodel';
//
export class Profaffectations extends EnseignantAffectationsModel {
    //
	static inject() { return [InfoUserInfo]; }
	//
    constructor(info: InfoUserInfo) {
        super(info);
    }// constructor
    //
   
}// class ProfAffectatios
