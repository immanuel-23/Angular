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
  color:string='red'
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
  players=["immanuel","Virat","Sachin","rahul"]
  batsman=[
    {name:"Immanuel",country:"India",runs:"300"},
    {name:"Virat",country:"India",runs:"40000"},
    {name:"David",country:"Australia",runs:"30500"},
    {name:"Dhoni",country:"India",runs:"70000"}

  ]

  scoreDetails=[
    {name:'Immanuel',matchs:10,lastFiveScore:[100,20,10,40,50]},
    {name:'Raj',matchs:4,lastFiveScore:[90,200,10,400,56]},
    {name:'David',matchs:7,lastFiveScore:[100,20,10,40,50]},
    {name:'Virat',matchs:7,lastFiveScore:[100,20,10,40,50]}

  ]

  fontColor:string='red';
  bgColor:string='yellow';

  toogleColor(){
    if(this.fontColor=="red"){
      this.bgColor='red';
      this.fontColor='yellow'
    }else{
      this.fontColor='red';
    this.bgColor='yellow';
    }
  }
 studentEntries = new Set();  

  
  idtodo:number=0;
  todoList:any[]= [];
  

  insertValue(todo:string){
    this.idtodo=this.idtodo+1;
    this.todoList.push({id:this.idtodo,"message":todo})
    
  };

  deleteMessage(id:number){
    console.log(id);
    this.todoList=this.todoList.filter(n=>n.id!==id);
    
  }
  

}



// this is a class file
