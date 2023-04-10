import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { MovieCardsComponent } from './components/movies/movie-cards/movie-cards.component';
import { AddMovieComponent } from './components/movies/add-movie/add-movie.component';
import { LoginComponent } from './components/account/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie-details/:id', component: MovieDetailsComponent },
  { path: 'movie-list', component: MovieCardsComponent },
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
