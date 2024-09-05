import {Component, Input, signal} from '@angular/core';
import {CdkDrag, CdkDragDrop} from '@angular/cdk/drag-drop';
import {NgClass} from "@angular/common";
import {HlmBadgeDirective} from "@spartan-ng/ui-badge-helm";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import { Task } from '../../../core/models/Task';
import {TodoSheetComponent} from "../todo-sheet/todo-sheet.component";
import {BrnSheetImports} from "@spartan-ng/ui-sheet-brain";
import {HlmSheetComponent} from "@spartan-ng/ui-sheet-helm";
import {TaskService} from "../../../services/task/task.service";
import {HlmButtonDirective} from "../../libs/ui/ui-button-helm/src";
import {CreateTaskRequest} from "../../../core/dtos/request/CreateTaskRequest";
import {doneStateId, stateDefaultId} from "../../../constants/constants";
import {TokenService} from "../../../services/token/token.service";

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
  standalone: true,
  imports: [CdkDrag, NgClass, HlmBadgeDirective, HlmIconComponent, TodoSheetComponent, BrnSheetImports, HlmSheetComponent, HlmButtonDirective]
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Input() state!: "TODO" | "DONE";
  isPopup = signal(false);
  loading = signal(false);
  cardLoading = signal(false);

  constructor(private taskService: TaskService, private tokenService: TokenService) {}


  drop(event: CdkDragDrop<Task>) {
    this.cardLoading.set(true);
    console.log(event.container.data._id);
    const updateTaskRequest: CreateTaskRequest = {
      category: this.task.category._id,
      description: this.task.description,
      name: this.task.name,
      state: event.container.data.state._id === stateDefaultId?stateDefaultId:doneStateId,
      user: this.tokenService.getUserId()
    }
    this.taskService.updateTask(this.task._id, updateTaskRequest).subscribe({
      complete: () => {
        this.loading.set(false)
      }
    });
  }

  openPopup() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.isPopup() ? this.isPopup.set(false) : this.isPopup.set(true);
  }

  deleteTask() {
    this.loading.set(true);
    this.taskService.deleteTask(this.task._id).subscribe({
      complete: () => {
        location.reload();
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
}
