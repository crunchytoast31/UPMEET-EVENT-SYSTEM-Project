import { Component, OnInit } from '@angular/core';
import { Favorites } from 'src/favorites';
import { EventsserviceService } from '../eventsservice.service';
import { FavoritesService } from '../favorites.service';
import { ViewFavorite } from '../view-favorite';


@Component({
	selector: 'app-favorites',
	templateUrl: './favorites.component.html',
	styleUrls: [ './favorites.component.css' ]
})
export class FavoritesComponent implements OnInit {
	constructor(private eventsDB : EventsserviceService, private favoritesdb : FavoritesService) {}

	favorites : ViewFavorite[] = [];

	ngOnInit(): void {
		this.favoritesdb.GetFavoriteEvents().subscribe((result:ViewFavorite[]) =>
		{
			this.favorites = result;
			console.log(this.favorites);
		});
		
	}

	RemoveFavoriteEvent(id:number, index:number) : void {
		console.log(id);
		this.favoritesdb.RemoveFavoriteEvent(id).subscribe((result)=>
		{
			
			this.favorites.splice(index,1);
		})
	}



}
