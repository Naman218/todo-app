import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {of} from 'rxjs';
import {Todo} from './../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];
  constructor() { 
    this.todos=[
      {
        id: '111',
        title:'learn C++',
        isComplete:true,
        date: new Date()

    },
    {
      id: '222',
      title:'learn React',
      isComplete:true,
      date: new Date()

  },
  {
    id: '333',
    title:'learn Angular',
    isComplete:false,
    date: new Date()

},

  

  ];
  }
  getTodo(){
    return of(this.todos)
  }
  addTodo(todo: Todo){
    this.todos.push(todo)
  }
  changeStatus(todo: Todo){
    this.todos.map(singletodo=>{
      if(singletodo.id==todo.id){
        todo.isComplete=!todo.isComplete
      }
    });
  }
  deleteTodo(todo:Todo){
    const indexofTodo=this.todos.findIndex((currentObj)=>currentObj.id==todo.id);
    this.todos.splice(indexofTodo,1);
  }

}
