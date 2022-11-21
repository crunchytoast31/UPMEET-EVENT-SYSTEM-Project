import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iEvents } from 'src/events';
import { Favorites } from 'src/favorites';

@Injectable({
	providedIn: 'root'
})
export class EventsserviceService {
	baseUrl: string = '';

	constructor(private http: HttpClient, @Inject('BASE_URL') private url: string) {
		this.baseUrl = url;
	}

	GetEventsList(): Observable<iEvents[]> {
		return this.http.get<iEvents[]>(this.baseUrl + 'api/Events');
	}

	AddToFavorites(id : number) : Observable<Favorites>{
		let favorite : Favorites = {eventId : id};
		return this.http.post<Favorites>(this.baseUrl, favorite);
	}

}
