import { Component } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-imm',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'first-project';
  apple='red';
  displayText='';
  color:string='green'
  getValue(box:string){
    this.displayText=box;
  }
  isDisabled=false;
  disableInput(){
    if(this.isDisabled){
      this.isDisabled=false;
    }else{
      this.isDisabled=true;
    }
  }
  show:boolean=true;


}
// this is a class file
