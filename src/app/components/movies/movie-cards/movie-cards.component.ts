import { MOVIES } from './../movies-mock-data';
import { IMovie } from './../movie';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css']
})
export class MovieCardsComponent {
  movies: IMovie[] = MOVIES;
}
