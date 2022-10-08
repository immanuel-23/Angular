import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() { }
  @Input() data=0;
  @Output()newItemEvent=new EventEmitter<string>();

  ngOnInit(): void {
  }
  addItem(item:any){
    this.newItemEvent.emit(item);
  }
  

}
