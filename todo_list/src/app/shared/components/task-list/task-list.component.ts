import {Component, Input, Signal} from '@angular/core';
import {CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {TaskCardComponent} from "../task-card/task-card.component";
import {HlmIconComponent, provideIcons} from "../../libs/ui/ui-icon-helm/src";
import {lucideCheck, lucidePlus} from "@ng-icons/lucide";
import { Task } from '../../../core/models/Task';
import {
  HlmSheetComponent,
} from "../../libs/ui/ui-sheet-helm/src";
import { BrnSheetTriggerDirective} from "@spartan-ng/ui-sheet-brain";
import {TodoSheetComponent} from "../todo-sheet/todo-sheet.component";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CdkDropList,
    TaskCardComponent,
    HlmIconComponent,
    HlmSheetComponent,
    BrnSheetTriggerDirective,
    TodoSheetComponent
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  providers: [provideIcons({ lucideCheck, lucidePlus })]
})
export class TaskListComponent {
  @Input() tasks!: Signal<Task[]>;
  @Input() title!: string;
  @Input() state!: "TODO" | "DONE";

  drop(event: CdkDragDrop<Task[]>) {
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
