import { Injectable } from '@angular/core';
import { ICreateMovieDto, IGenre, IMovie } from './movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private api: string = 'https://localhost:7088/api/movies';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.api);
  }
  getGenres(): Observable<IGenre[]> {
    return this.http.get<IGenre[]>(`${this.api}/genres`);
  }

  getById(id: number): Observable<IMovie> {
    return this.http.get<IMovie>(`${this.api}/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }

  create(movie: ICreateMovieDto): Observable<any> {
    return this.http.post(`${this.api}`, movie);
  }

  // TODO: update()
}
