import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TodoComponent } from './components/todo/todo.component';
import { FoodComponent } from './components/food/food.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'projects',
    component: ProjectListComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'food',
    component: FoodComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
