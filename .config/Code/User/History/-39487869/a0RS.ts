import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{

  taskArray=[{taskName:'Brush teeth',isCompleted:false}];

  ngOnInit():void{

  }

  onSubmit(form:NgForm){

  }

}
