import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class TaskService {
  public tasks = ['abc'];

  constructor(private _http: Http) {

  }

  // retrieveTasks(callback) {
  //   this._http.get('http://5983617334e4a300116fea9f.mockapi.io/tasks').subscribe(
  //     (res) => {
  //       this.tasks = res.json();
  //       callback(this.tasks);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
  AretrieveTasks() {
    this._http.get('http://5983617334e4a300116fea9f.mockapi.io/tasks')
    .map(res => res.json()).
    subscribe(
      (res) => {
        console.log(this);
        console.log(res);
        console.log(this.tasks);
        this.tasks = res;
        console.log(this);
        console.log(res);
        console.log(this.tasks);
        
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
