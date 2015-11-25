//semestresmodel.ts
//
import {UserInfo} from './userinfo';
import {IntervalledViewModel} from './intervalmodel';
import {ISemestre} from 'infodata';
//
export class SemestresModel extends IntervalledViewModel<ISemestre> {
	//
    constructor(info: UserInfo) {
        super(info);
        this.title = 'Semestres';
    }// constructor
	protected create_item(): ISemestre {
        return this.itemFactory.create_semestre({
			anneeid:this.anneeid
		});
    }
	protected prepare_model(): any {
		return {type: this.modelItem.type(),
			anneeid:this.anneeid};
	}// prepare_model
	 protected is_refresh(): boolean {
        return (this.anneeid !== null);
    }
	public post_change_annee():Promise<any>{
		 this.modelItem.anneeid = this.anneeid;
        this.currentItem = this.create_item();
        return this.refreshAll();
	}
	protected perform_activate():Promise<any> {
		return super.perform_activate().then((r)=>{
			let old = this.annee;
			let id = (old !== null) ? old.id : null;
			this.annee = null;
			this.annee = this.sync_array(this.annees,id);
			return this.refreshAll();
		});
	}// perform_activate
    public get isEditable(): boolean {
		return this.is_admin || this.is_super;
    }
    public canActivate(params?: any, config?: any, instruction?: any): any {
		let bRet: boolean = false;
		if (this.is_connected) {
			bRet = this.is_admin || this.is_super;
		}
		return bRet;
    }// activate
	protected get_min_date(): string {
		return this.anneeMinDate;
	}
	protected get_max_date(): string {
		return this.anneeMaxDate;
	}
}// class SemestresModel