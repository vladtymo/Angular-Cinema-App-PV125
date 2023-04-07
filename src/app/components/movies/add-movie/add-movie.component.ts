import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICreateMovieDto, IGenre, IMovie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  genres: IGenre[] = [];

  // form groups - contains all input data
  // movieForm = new FormGroup({
  //   title: new FormControl(''),
  //   year: new FormControl(new Date().getFullYear()),
  //   cover: new FormControl(''),
  //   genres: new FormControl([]),
  //   duration: new FormControl('01:33'),
  //   isCurrent: new FormControl(false)
  // });
  // the same but using FormBuilder
  movieForm = this.fb.group({
    title: ['', Validators.required],
    year: [new Date().getFullYear()],
    coverUrl: [''],
    genreIds: [[]],
    duration: '01:33',
  });

  constructor(private fb: FormBuilder, private movieService: MovieService) {
  }
  ngOnInit(): void {
    this.movieService.getGenres().subscribe(res => this.genres = res);
  }

  showResult() {
    let item: ICreateMovieDto = this.movieForm.value as ICreateMovieDto;
    item.duration += ":00";
    console.log(item);

    // send to the server
    this.movieService.create(item).subscribe(res => {
      console.log("Movie was created successfuly!");
    });
  }
}
