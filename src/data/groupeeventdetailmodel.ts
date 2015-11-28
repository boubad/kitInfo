//groupeeventdetailmodel.ts
//
import {UserInfo} from './userinfo';
import {BaseDetailModel} from './basedetailmodel';
import {EVT_NOTE} from './infoconstants';
import {IGroupeEvent, IEtudiantEvent, IEnseignantAffectation} from 'infodata';

export class GroupeEventDetailModel extends BaseDetailModel<IGroupeEvent> {
	//
	private _notes: IEtudiantEvent[];
	private _evts: IEtudiantEvent[];
	private _evtModel: IEtudiantEvent;
	private _canEdit:boolean;
	//
	constructor(userinfo: UserInfo) {
		super(userinfo);
		this.title = "Détails Devoirs";
		this._evtModel = this.itemFactory.create_etudiantevent();
	}
	public get canEdit():boolean {
		if ((this._canEdit === undefined)|| (this._canEdit === null)){
			this._canEdit = false;
		}
		return this._canEdit;
	}
	public get isReadOnly():boolean {
		return (!this.canEdit);
	}
	public get notes(): IEtudiantEvent[] {
		if ((this._notes === undefined) || (this._notes === null)) {
			this._notes = [];
		}
		return this._notes;
	}
	public get evts(): IEtudiantEvent[] {
		if ((this._evts === undefined) || (this._evts === null)) {
			this._evts = [];
		}
		return this._evts;
	}
	private get evtModel(): IEtudiantEvent {
		if ((this._evtModel === undefined) || (this._evtModel === null)) {
			this._evtModel = this.itemFactory.create_etudiantevent();
		}
		return this._evtModel;
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
			let pp: IGroupeEvent = this.event;
			if (pp === null) {
				this.event = this.itemFactory.create_groupeevent();
				this.title = "Détails Devoirs";
			} else {
				this.title = this.event.name;
			}
			let affid = this.event.profaffectationid;
			return this.dataService.find_item_by_id(affid);
		}).then((paff: IEnseignantAffectation) => {
			if ((paff !== undefined) && (paff !== null)) {
				let d = paff.startDate;
				if ((d !== undefined) && (d !== null)) {
					this.minDate = d.toISOString().substr(0, 10);;
				}
				d = paff.endDate;
				if ((d !== undefined) && (d !== null)) {
					this.maxDate = d.toISOString().substr(0, 10);;
				}
				if (this.is_prof){
					let cont = this.person.affectationids;
					this._canEdit = this.contains_array_id(cont,paff.id);
				}
			}// paff
			return this.fill_notes();
		});
	}// activate
	
	private fill_notes(): Promise<any> {
		this._notes = [];
		this._evts = [];
		let x = this.event;
		let id = (x !== null) ? x.id : null;
		if (id === null) {
			return Promise.resolve(true);
		}
		return this.dataService.query_items(this.evtModel.type(), { groupeeventid: id }).then((xx: IEtudiantEvent[]) => {
			return this.retrieve_avatars(xx);
		}).then((ee: IEtudiantEvent[]) => {
			if ((ee !== undefined) && (ee !== null)) {
				let xee = this.filter_etudevents(ee);
				for (let x of xee) {
					if (x.genre == EVT_NOTE) {
						this.add_item_to_array(this._notes, x);
					} else {
						this.add_item_to_array(this._evts, x);
					}
				}// e
			}// ee
			return true;
		})
	}
	private filter_etudevents(ee: IEtudiantEvent[]): IEtudiantEvent[] {
		let oRet: IEtudiantEvent[] = [];
		let nPers: string = null;
		if (this.is_etud) {
			nPers = this.personid;
		}
		if ((ee !== undefined) && (ee !== null) && (ee.length > 0)) {
			for (let x of ee) {
				if (nPers != null) {
					if (nPers == x.personid) {
						oRet.push(x);
					}
				} else {
					oRet.push(x);
				}
			}// e
		}// ee
		return oRet;
	}// filter_etudevents
	public get groupeEventId(): string {
		return (this.event !== null) ? this.event.id : null;
	}
	public get name(): string {
		return (this.event !== null) ? this.event.name : null;
	}
	public set name(s: string) {
		if (this.event !== null) {
			this.event.name = s;
		}
	}
	public get location(): string {
		return (this.event !== null) ? this.event.location : null;
	}
	public set location(s: string) {
		if (this.event !== null) {
			this.event.location = s;
		}
	}
	public get coefficient(): string {
		return (this.event !== null) ? this.number_to_string(this.event.coefficient) : "1";
	}
	public set coefficient(s: string) {
		if (this.event !== null) {
			this.event.coefficient = this.string_to_number(s);
		}
	}
	public get startTime(): string {
		return (this.event !== null) ? this.event.startTime : null;
	}
	public set startTime(s: string) {
		if (this.event !== null) {
			this.event.startTime = s;
		}
	}
	public get endTime(): string {
		return (this.event !== null) ? this.event.endTime : null;
	}
	public set endTime(s: string) {
		if (this.event !== null) {
			this.event.endTime = s;
		}
	}
}// class Profgroupeevents
