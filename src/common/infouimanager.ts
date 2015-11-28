//infouimanager.ts
//
import {UIManager} from '../data/uimanager';
import {DialogService} from 'aurelia-dialog';
import {InfoPrompt} from './infoprompt';
//
export class InfoUIManager extends UIManager {
	//
	static inject() { return [DialogService]; }
	//
	private _service: DialogService;
	constructor(serv: DialogService) {
		super();
		if ((serv !== undefined) && (serv !== null)) {
			this._service = serv;
		}
	}// constructor
	/*
	public confirm(s: string): Promise<boolean> {
		let bRet: boolean = false;
		if ((this._service === undefined) || (this._service === null)) {
			return Promise.resolve(bRet);
		}
		return this._service.open({ viewModel: InfoPrompt, model: { text: s } }).then((result) => {
			if (!result.wasCancelled) {
				bRet = true;
			}
			return bRet;
		}).catch((err) => {
			return bRet;
		});
    }// confirm
	*/
}