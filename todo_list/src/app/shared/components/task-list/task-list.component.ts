import {Component, Input} from '@angular/core';
import {CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {TaskCardComponent} from "../task-card/task-card.component";
import {HlmIconComponent, provideIcons} from "@spartan-ng/ui-icon-helm";
import {lucideCheck} from "@ng-icons/lucide";
import { Task } from '../../../core/model/Task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CdkDropList,
    TaskCardComponent,
    HlmIconComponent,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  providers: [provideIcons({ lucideCheck })]
})
export class TaskListComponent {
  @Input() tasks!: Task[];
  @Input() title!: string;
  @Input() state!: "TODO" | "DONE";

  drop(event: CdkDragDrop<Task[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
