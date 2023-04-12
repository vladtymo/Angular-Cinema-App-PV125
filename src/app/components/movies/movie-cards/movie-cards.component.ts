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
  movies?: IMovie[];
  loaded: boolean = false;
  unauthorized = false;

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    // load data from server
    this.movieService.getAll().subscribe(res => {

      console.log(res);
      
      this.movies = res;
      this.loaded = true;
    }, err => {
      if (err.status == 401) {
        this.loaded = true;
        this.unauthorized = true;
      }
    });
  }
}
