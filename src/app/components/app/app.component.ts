import { MOVIES } from './../movies/movies-mock-data';
import { Component } from '@angular/core';
import { IMovie } from '../movies/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-todo-app';

  allMovies: IMovie[];
  newMovies: IMovie[];

  constructor() {
    this.allMovies = MOVIES;
    this.newMovies = MOVIES.filter(x => x.year >= 2018);
  }
}
