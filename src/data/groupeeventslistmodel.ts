//groupeeventslistmodel.ts
//
import {UserInfo} from './userinfo';
import {BaseConsultViewModel} from './baseconsultmodel';
import {IGroupeEvent} from 'infodata';
//
export class BaseGroupeEventListModel extends BaseConsultViewModel<IGroupeEvent> {
    //
    constructor(userinfo: UserInfo) {
        super(userinfo);
        this.title = "Liste Devoirs";
    }// constructor
    protected is_refresh(): boolean {
        return (this.semestreid !== null) && (this.matiereid !== null) &&
		(this.groupeid !== null);
    }
	protected prepare_model(): any {
		return {semestreid:this.semestreid,
			matiereid:this.matiereid,
		    groupeid: this.groupeid};
	}// prepare_model
    protected create_item(): IGroupeEvent {
        let p = this.itemFactory.create_groupeevent({
            matiereid: this.matiereid,
            semestreid: this.semestreid,
            groupeid: this.groupeid,
        });
        return p;
    }// create_item
    protected post_up_semestre(): Promise<boolean> {
		if (!this.in_activate){
        return this.refreshAll();
		} else {
			return Promise.resolve(true);
		}
    }
    protected post_update_matiere(): Promise<boolean> {
       if (!this.in_activate){
        return this.refreshAll();
		} else {
			return Promise.resolve(true);
		}
    }
    protected post_update_groupe(): Promise<boolean> {
       if (!this.in_activate){
        return this.refreshAll();
		} else {
			return Promise.resolve(true);
		}
    }
}// class BaseGroupeEventListModel
