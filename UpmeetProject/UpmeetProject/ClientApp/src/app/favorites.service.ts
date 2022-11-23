import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iEvents } from 'src/events';
import { Favorites } from 'src/favorites';
import { ViewFavorite } from './view-favorite';

@Injectable({
	providedIn: 'root'
})
export class FavoritesService {
	baseUrl: string = '';
	constructor(private http: HttpClient, @Inject('BASE_URL') private url: string) {
		this.baseUrl = url;
	}

	// GetEventsList(): Observable<iEvents[]> {
	// 	return this.http.get<iEvents[]>(this.baseUrl + 'api/Events');
	// }

	GetFavoriteEvents(): Observable<ViewFavorite[]>{
		return this.http.get<ViewFavorite[]>(this.baseUrl+'api/Favorites/GetFavoritedEvents')
	}
	
}
