import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbg:any;

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,"scrolllength#");

    if(document.body.scrollTop>0||document.documentElement.scrollTop>0){
      this.navbg={
        'background-color':'#000000'
      }
    }else{
      this.navbg={}
    }
  }
}
