import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-test';
 i:number=100;
 items=['1','2','3','4'];
 x:any;
 text:any;
 fontSize:number=16;
 addItem(item:any){
  this.items.push(item)
 }
 displayItems(item:any){
  this.x=item;
 }
 displayText(item:any){
  this.text=item
 }

}
