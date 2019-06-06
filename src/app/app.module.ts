import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ArticleDisplayComponent } from './components/projects/article-display/article-display.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormArticleComponent } from './components/projects/form-article/form-article.component';
import { FormSpecsComponent } from './components/projects/form-specs/form-specs.component';
import { FormInfosComponent } from './components/projects/form-infos/form-infos.component';
import { FoodComponent } from './components/food/food.component';
import { TodoComponent } from './components/todo/todo.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { TodoOverviewComponent } from './components/todo/todo-overview/todo-overview.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/food.reducer';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ProjectsComponent,
    ArticleDisplayComponent,
    FormArticleComponent,
    FormSpecsComponent,
    FormInfosComponent,
    FoodComponent,
    TodoComponent,
    TodoOverviewComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgReduxModule,
    StoreModule.forRoot(reducer),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor( ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
 }
