import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  wantToHelp = {
    image: 'assets/images/want_help.jpg',
    title: 'WANT TO HELP',
  }

  needHelp = {
    image: 'assets/images/need_help.jpg',
    title: 'NEED HELP',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
