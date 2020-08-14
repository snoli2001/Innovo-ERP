import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toHome(){
    document.getElementById("home").scrollIntoView();
  }
  toAboutUs(){
    document.getElementById("aboutUs").scrollIntoView();
  }
  toServices(){
    document.getElementById("services").scrollIntoView();
  }
  toPricing(){
    document.getElementById("pricing").scrollIntoView();
  }
  toSteps(){
    document.getElementById("steps").scrollIntoView();

  }
}

