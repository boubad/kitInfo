//profil.ts
//
import {InfoUserInfo} from './infouserinfo';
import {ProfilModel} from '../data/profilmodel';
//
//
export class Profil extends ProfilModel {
	//
	public static inject(){return [InfoUserInfo];}
  //
  constructor(info: InfoUserInfo) {
		super(info);
  }
}// class Profil
