import { Component, Input, OnInit } from '@angular/core';
import { iEvents } from 'src/events';

@Component({
	selector: 'app-addtask',
	templateUrl: './addtask.component.html',
	styleUrls: [ './addtask.component.css' ]
})
export class AddtaskComponent implements OnInit {
	@Input() currentEvents: iEvents[] = [];
	newEvent: iEvents = {
		name: '',
		dateTime: '',
		location: '',
		description: '',
		isReadMore: false,
		id: -1
	};

	constructor() {}

	addEvent() {
		this.newEvent.name = (<HTMLInputElement>document.getElementById('name')).value;
		this.newEvent.dateTime = (<HTMLInputElement>document.getElementById('date')).value;
		this.newEvent.location = (<HTMLInputElement>document.getElementById('location')).value;
		this.newEvent.description = (<HTMLInputElement>document.getElementById('description')).value;
		this.currentEvents.push(this.newEvent);
	}

	ngOnInit(): void {}
}
