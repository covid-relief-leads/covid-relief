import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  wantToHelp = {
    image: '../../../assets/images/want_help.jpg',
    title: 'WANT TO HELP',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, optio dolore. Veritatis quisquam mollitia delectus eligendi. Aspernatur id eaque tenetur eos temporibus vitae nam dolore porro expedita, nemo enim laudantium'
  }

  needHelp = {
    image: '../../../assets/images/need_help.jpg',
    title: 'NEED HELP',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, optio dolore. Veritatis quisquam mollitia delectus eligendi. Aspernatur id eaque tenetur eos temporibus vitae nam dolore porro expedita, nemo enim laudantium'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
