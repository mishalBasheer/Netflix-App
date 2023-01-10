import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://api.themoviedb.org/3';
  apikey = '08cc33bd5ae3a747598ce2ad84376e66';
  bannerapi = `${this.baseUrl}/trending/all/week?api_key=${this.apikey}`;
  trendingapi = `${this.baseUrl}/trending/movie/day?api_key=${this.apikey}`;
  searchapi = `${this.baseUrl}/search/movie?api_key=${this.apikey}&query=`;

  // Banner 
  bannerApiData(): Observable<any> {
    return this.http.get(this.bannerapi);
  }

  // trending movie 
  trendingMovieApiData(): Observable<any> {
    return this.http.get(this.trendingapi);
  }

  // search movie 
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'getSearch');
    return this.http.get(this.searchapi + data.movieName);
  }

  // movie details 
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${data}?api_key=${this.apikey}`
    );
  }

  // movie video 
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${data}/videos?api_key=${this.apikey}`
    );
  }

  getMovieCast(data:any):Observable<any>{
    
  }
}
