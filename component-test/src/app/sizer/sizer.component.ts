import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent implements OnInit {

  constructor() { }
  @Input() size=0;
  @Output() sizeChange=new EventEmitter<number>();

  ngOnInit(): void {
  }
  increment(){
    this.sizeChange.emit(this.size+1);

  }
  decrement(){
    if(this.size>0){
      this.sizeChange.emit(this.size-1);

    }

  }

}
