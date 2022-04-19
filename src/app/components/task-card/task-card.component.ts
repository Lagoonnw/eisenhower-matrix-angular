import { Component, OnInit, Input } from '@angular/core';
import {Task} from "../../common/models/Task";
import {animate, AnimationMetadata, style} from "@angular/animations";
import {ColorHex} from "../../common/Helpers/data-generator";

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() task: Task | null = null;

  get animation(): AnimationMetadata[] {
    if (!this.task) {
      return [];
    }

    return [
      style({ backgroundImage: `linear-gradient(to top, ${this.task?.colors[0]} 0%, ${this.task?.colors[1]} 100%)` }),
      animate('100ms ease', style({ transform: 'rotate(0deg)' })),
      animate('100ms ease', style({ transform: 'rotate(180deg)' })),
      animate('100ms ease', style({ transform: 'rotate(360deg)' })),
    ]

  }


  constructor() { }

  ngOnInit(): void {
  }

}
