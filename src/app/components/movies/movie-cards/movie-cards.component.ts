import { MOVIES } from './../movies-mock-data';
import { IMovie } from './../movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css']
})
export class MovieCardsComponent implements OnInit {
  movies: IMovie[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    // load data from server
    this.movieService.getAll().subscribe(res => this.movies = res);
  }
}
