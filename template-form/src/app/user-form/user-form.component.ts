import { Component, OnInit } from '@angular/core';
import {  NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userName:string='';
  userType:string=''
  userGender:string=''
  condition:boolean=false;

  addUser(formDat:NgForm){
    console.log(formDat.value);
    
  }



}
