import { IMovie } from './../movie';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOVIES } from '../movies-mock-data';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  movie?: IMovie;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {

      let id = params['id'];
      this.movie = MOVIES.find(x => x.id == id);
    });
  }
}
