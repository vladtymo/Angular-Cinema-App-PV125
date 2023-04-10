import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';

import { HeaderComponent } from './components/header/header.component';
import { MovieCardsComponent } from './components/movies/movie-cards/movie-cards.component';
import { MovieCardComponent } from './components/movies/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AddMovieComponent } from './components/movies/add-movie/add-movie.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/account/login/login.component';
import { JwtInterceptor } from './components/account/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieCardsComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    HomeComponent,
    AddMovieComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }