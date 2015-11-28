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
		if (!this.in_activate){
		return this.refreshAll() ;
		} else {
			return Promise.resolve(true);
		}
    }
	protected perform_activate(): Promise<any> {
		return super.perform_activate().then((r)=>{
			if (this.departementid == null){
				if (this.departements.length > 0){
					this.departement = this.departements[0];
				}
			}
			this.modelItem.departementid = this.departementid;
        	this.currentItem = this.create_item();
		})
	}
}// class BaseEditViewModel
