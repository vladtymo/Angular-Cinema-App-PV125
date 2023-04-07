import { MOVIES } from './../movies-mock-data';
import { IMovie } from './../movie';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  
  @Input()
  movie?: IMovie;
  
  genres: string[] | undefined = [];
  
  ngOnInit(): void {
    this.genres = this.movie?.genres?.map(g => g.name);
  }
}
