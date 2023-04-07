import { IMovie } from './../movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOVIES } from '../movies-mock-data';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie?: IMovie;
  genres: string[] | undefined = [];

  constructor(private route: ActivatedRoute,
              private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      let id = params['id'];

      // find movie by id
      //this.movie = MOVIES.find(x => x.id == id);                      // from local
      this.movieService.getById(id).subscribe(res => {

        this.movie = res;
        this.genres = this.movie?.genres?.map(g => g.name);

      }); // from server
    });
  }
}
