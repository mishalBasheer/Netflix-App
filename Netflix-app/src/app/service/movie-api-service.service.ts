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
// getMoviecast 
  getMovieCast(data:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apikey}`)
  }

    // action 
    fetchActionMovies(): Observable<any> {
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
    }
  
    // adventure
    fetchAdventureMovies(): Observable<any> {
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
    }
  
    // animation
    fetchAnimationMovies(): Observable<any> {
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
    }
  
    // comedy
    fetchComedyMovies(): Observable<any> {
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
    }
  
    // documentary
    fetchDocumentaryMovies(): Observable<any> {
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
    }
  
    // science-fiction:878
  
    fetchScienceFictionMovies(): Observable<any> {
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
    }
  
    // thriller:53
    fetchThrillerMovies(): Observable<any> {
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
    }
}
