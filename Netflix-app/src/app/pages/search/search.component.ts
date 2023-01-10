import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchMovie } from 'src/app/searchMovieApi';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchResult!:Array<SearchMovie>;
  constructor(private service:MovieApiServiceService) {}

  ngOnInit(): void {}
  searchForm= new FormGroup({
    'movieName':new FormControl(null)
  })
  submitForm(){
    this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
      this.searchResult=result.results;
    })
  }
}
