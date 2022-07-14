import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EMPTY } from 'rxjs';
import { Todo } from "../../Todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {
    const localItem = localStorage.getItem("todos");
    if(localItem == null) {
      this.todos = [];
    }
    else{
      console.log(this.todos);
      this.todos = JSON.parse(localItem);
    }
  }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));

  }
  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));

  }
  toggleTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));

  }
}
