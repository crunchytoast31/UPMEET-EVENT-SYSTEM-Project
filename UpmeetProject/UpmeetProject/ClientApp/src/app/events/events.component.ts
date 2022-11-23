import { Component, OnInit } from '@angular/core';
import { EventsserviceService } from '../eventsservice.service';
import { Event } from '@angular/router';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { iEvents } from 'src/events';
import { Favorites } from 'src/favorites';

@Component({
	selector: 'app-events',
	templateUrl: './events.component.html',
	styleUrls: [ './events.component.css' ]
})
export class EventsComponent implements OnInit {
	currentList: iEvents[] = [];
	constructor(private eventsDB: EventsserviceService) {
		this.eventsDB.GetEventsList().subscribe((results: iEvents[]) => {
			this.currentList = results;
			console.log(this.currentList);
		});
	}
	
	favorites : Favorites[] = [];

	AddFavoriteEvent(eventId : number) : void{
		this.eventsDB.AddToFavorites(eventId).subscribe((result) => 
		{this.favorites.push(result)});
	}

	showText(id: number) {
		this.currentList[id].isReadMore = !this.currentList[id].isReadMore;
	}
	ngOnInit(): void {}

}
