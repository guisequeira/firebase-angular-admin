import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { ITodo } from 'src/app/models/todo';
import { IAppState } from 'src/app/store';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from 'src/app/actions';
import { FormGroup, FormControl } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @select() todos;

  displayedColumns: string[] = ['id', 'description', 'responsability', 'priority'];

  todoFormGroup = new FormGroup({
    description: new FormControl(''),
    responsability: new FormControl(''),
    priority: new FormControl(''),
  });

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  onSubmit() {
    const newTodo: ITodo = {
      description: this.todoFormGroup.controls.description.value,
      responsability: this.todoFormGroup.controls.responsability.value,
      priority: this.todoFormGroup.controls.priority.value,
      isCompleted: false,
    }

    this.ngRedux.dispatch({type: ADD_TODO, todo: newTodo});
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({type: TOGGLE_TODO, id: todo.id});
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({type: REMOVE_TODO, id: todo.id});
  }

}
