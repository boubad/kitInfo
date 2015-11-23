//profil.ts
//
import {UserInfo} from './data/userinfo';
import {ProfilModel} from './data/profilmodel';
//
//
export class Profil extends ProfilModel {
	//
	public static inject(){return [UserInfo];}
  //
  constructor(info: UserInfo) {
		super(info);
  }
}// class Profil
