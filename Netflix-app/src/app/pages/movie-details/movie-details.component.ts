import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast, MovieDetails } from 'src/app/MovieDetailsApi';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}
  getMovieDetails!:MovieDetails;
  getMovieVideo!: string;
  getMovieCastResult!:Array<Cast>;
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      this.getMovieDetails = result;
    });
  }

  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      result.results.forEach((element:any)=>{
        if(element.name=='Official Trailer'){
          this.getMovieVideo=element.key;
        }
      })
    });
  }

  getMovieCast(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      this.getMovieCastResult=result.cast;
    });
  }
}
