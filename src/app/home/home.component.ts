import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clickCounter: number;
  name: string;
  constructor() { 

  }

  ngOnInit(): void {
    this.clickCounter=0
  }

  countClick(){
    this.clickCounter +=1;
  }

  setClasses(){
    let myClasses ={
      active:this.clickCounter > 4,
      noactive: this.clickCounter < 4
    }
    return myClasses;
  }
}
