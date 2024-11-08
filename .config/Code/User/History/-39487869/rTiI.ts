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
   this.taskArray.push({taskName:form.controls['task'].value,
   isCompleted:false


   })
   form.reset();
  
  }
  onDelete(index:number){
   
    this.taskArray.splice(index,1);
    

  }
  onCheck(index:number){
    console.log(this.taskArray);
    this.taskArray[index].isCompleted=!  this.taskArray[index].isCompleted;

  }

  
  onEdit(index:number){

  }
onSave(index:number){

}
}
