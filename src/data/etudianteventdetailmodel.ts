//etudianteventdetailmodel.ts
//
import {UserInfo} from './userinfo';
import {BaseDetailModel} from './basedetailmodel';
import {IGroupeEvent, IEtudiantEvent, IEtudiantAffectation} from 'infodata';
import {EVT_NOTE} from './infoconstants';
//
export class EtudEventDetailModel extends BaseDetailModel<IEtudiantEvent> {
	//
    private _canEdit: boolean = false;
    //
    constructor(userinfo: UserInfo) {
        super(userinfo);
        this.title = "Détails Evènement";
    }
	public get canEdit(): boolean {
		if ((this._canEdit === undefined) || (this._canEdit === null)) {
			this._canEdit = false;
		}
		return this._canEdit;
	}
	public get isReadOnly(): boolean {
		return (!this.canEdit);
	}
    public activate(params?: any, config?: any, instruction?: any): any {
		let id: string = null;
		if (params.id !== undefined) {
			id = params.id;
		}
		let p = this.event;
		if (p !== null) {
			if (p.url !== null) {
				this.revokeUrl(p.url);
			}
		}
		this._canEdit = false;
		this.event = null;
        return this.initialize_event(id).then((b) => {
			let pp: IEtudiantEvent = this.event;
			if (pp === null) {
				this.event = this.itemFactory.create_etudiantevent();
				this.title = "Détails Evènement";
			} else {
				this.title = this.event.fullname;
			}
			let gvtid = this.event.groupeeventid;
			return this.dataService.find_item_by_id(gvtid);
		}).then((paff: IGroupeEvent) => {
			if ((paff !== undefined) && (paff !== null)) {
				if (this.is_prof) {
					let cont = this.person.eventids;
					this._canEdit = this.contains_array_id(cont, paff.id);
				}
			}// paff
			return true;
		});
    }// activate
	public get groupeEventName(): string {
		return (this.event !== null) ? this.event.groupeEventName : null;
	}
	public get groupeeventid():string {
		return (this.event !== null) ? this.event.groupeeventid : null;
	}
	public get etudiantid():string {
		return (this.event !== null) ? this.event.etudiantid : null;
	}
    public get note(): string {
		return (this.event !== null) ? this.number_to_string(this.event.note) : null;
    }
    public set note(s: string) {
        if (this.event !== null) {
			this.event.note = this.string_to_number(s);
		}
    }

}// EtudEventDetailModel