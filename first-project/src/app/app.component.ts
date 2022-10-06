import { Component } from '@angular/core';

@Component({
  selector: 'app-imm',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';
  apple='red';
  displayText='';
  getValue(box:string){
    this.displayText=box;
  }
  
}
// this is a class file
