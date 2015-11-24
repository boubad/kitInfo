//depsiglenamemodel.ts
//
import {UserInfo} from './userinfo';
import {SigleNamedViewModel} from './siglenamedmodel';
import {IDepartementSigleNamedItem} from 'infodata';
//
export class DepSigleNameViewModel<T extends IDepartementSigleNamedItem>
	extends SigleNamedViewModel<T> {
    //
    constructor(info: UserInfo) {
        super(info);
    }// constructor
    //
    protected is_refresh(): boolean {
        return (this.departementid !== null);
    }
	 protected prepare_model(): any {
		return {type: this.modelItem.type(),
			departementid:this.departementid};
	}// prepare_model
    public post_change_departement(): Promise<any> {
        this.modelItem.departementid = this.departementid;
        this.currentItem = this.create_item();
		return this.refreshAll();
    }
}// class BaseEditViewModel
