import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IMovie } from '../movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  genres: string[] = [
    "Action", 'Drama', "War", "Crime", "Survival", "Adventure", "Sci-Fi", "Thriller"
  ]

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
    cover: [''],
    genres: [[]],
    duration: '01:33',
    isCurrent: [false]
  });

  constructor(private fb: FormBuilder) {
  }

  showResult() {
    let item = this.movieForm.value;
    console.log(item);

    // send to the server
  }
}
