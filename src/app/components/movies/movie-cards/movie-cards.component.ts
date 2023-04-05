import { MOVIES } from './../movies-mock-data';
import { IMovie } from './../movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css']
})
export class MovieCardsComponent implements OnInit {
  movies: IMovie[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // load data from server

    this.http.get<IMovie[]>('https://localhost:7088/api/movies').subscribe(res => {
      
      // ... this code automatically invokes when the operation complete ...
      console.log(res);
            
      this.movies = res;

    });
  }
}
