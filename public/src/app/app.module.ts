import { TaskService } from './task/task.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskNewComponent } from './task/task-new/task-new.component';
import { TaskComponent } from './task/task.component';
import { TaskDetailsComponent } from './task/task-details/task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskNewComponent,
    TaskComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
