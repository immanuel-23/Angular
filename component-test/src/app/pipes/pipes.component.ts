import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string="immanuel"
  numbers=[10,20,30,40,50];
  today=Date.now()
  person={name:'immanuel' }
  number=10.6789009989;


}
