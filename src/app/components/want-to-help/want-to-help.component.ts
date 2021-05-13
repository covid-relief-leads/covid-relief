import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-want-to-help',
  templateUrl: './want-to-help.component.html',
  styleUrls: ['./want-to-help.component.css']
})
export class WantToHelpComponent implements OnInit {

  plasma = {
    image: "../../../assets/images/plasma.jpg",
    title: "PLASMA",
    subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita explicabo quas facilis qui maiores rerum hic nemo dignissimos voluptates! Nulla, officiis nostrum sunt facilis ipsam dolorem nesciunt possimus commodi corrupti",
  }

  oxygen = {
    image: "../../../assets/images/oxygen.jpg",
    title: "OXYGEN",
    subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita explicabo quas facilis qui maiores rerum hic nemo dignissimos voluptates! Nulla, officiis nostrum sunt facilis ipsam dolorem nesciunt possimus commodi corrupti",
  }

  vaccine = {
    image: "../../../assets/images/vaccine.jpg",
    title: "VACCINE",
    subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita explicabo quas facilis qui maiores rerum hic nemo dignissimos voluptates! Nulla, officiis nostrum sunt facilis ipsam dolorem nesciunt possimus commodi corrupti",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
