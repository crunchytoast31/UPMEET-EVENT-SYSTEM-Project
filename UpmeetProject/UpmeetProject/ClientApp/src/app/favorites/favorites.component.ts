import { Component, OnInit } from '@angular/core';
import { Favorites } from 'src/favorites';
import { EventsserviceService } from '../eventsservice.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private eventsDB : EventsserviceService) { }

  favorites : Favorites[] = [];

  ngOnInit(): void {
  }

  AddFavoriteEvent(eventId : number) : void{
		this.eventsDB.AddToFavorites(eventId).subscribe((result) => 
      {this.favorites.push(result)});
	}
  
  RemoveFavoriteEvent(eventId: number) {
  }
}
