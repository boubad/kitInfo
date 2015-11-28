//infoprompt.ts
//
import {DialogController} from 'aurelia-dialog';
//
export class InfoPrompt {
	//
	static inject() { return [DialogController]; }
	//
	public controller: DialogController;
	public promptText: string;
	//
	constructor(controller: DialogController) {
		this.controller = controller;
		this.promptText = null;
	}
	public activate(arg: any) {
		this.promptText = null;
		if ((arg !== undefined) && (arg !== null)){
			if (arg.text !== undefined){
				this.promptText = arg.text;
			}
		}// arg
	}
}