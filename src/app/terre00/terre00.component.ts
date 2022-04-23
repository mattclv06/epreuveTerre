import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terre00',
  templateUrl: './terre00.component.html',
  styleUrls: ['./terre00.component.css']
})
export class Terre00Component implements OnInit {

  personnel = "any";

  constructor() { }

  ngOnInit(): void {
    this.hello("tti")
  }

  hello(personne: string){

    return 'Hello' + personne;
  }

}
