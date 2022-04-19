import { Component } from '@angular/core';
import {DataGenerator} from "./common/Helpers/data-generator";
import {Task} from "./common/models/Task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  alert: string = '';
  constructor() {
    this.tasks = DataGenerator.tasks(20);
    console.log('t', this.tasks);
  }
}
