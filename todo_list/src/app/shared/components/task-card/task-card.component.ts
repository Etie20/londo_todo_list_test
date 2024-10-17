import {Component, Input, signal} from '@angular/core';
import {CdkDrag, CdkDragDrop} from '@angular/cdk/drag-drop';
import {NgClass} from "@angular/common";
import {HlmBadgeDirective} from "../../libs/ui/ui-badge-helm/src";
import {HlmIconComponent} from "../../libs/ui/ui-icon-helm/src";
import { Task } from '../../../core/models/Task';
import {TodoSheetComponent} from "../todo-sheet/todo-sheet.component";
import {BrnSheetImports} from "@spartan-ng/ui-sheet-brain";
import {HlmSheetComponent} from "../../libs/ui/ui-sheet-helm/src";
import {TaskService} from "../../../services/task/task.service";
import {HlmButtonDirective} from "../../libs/ui/ui-button-helm/src";
import {CreateTaskRequest} from "../../../core/dtos/request/CreateTaskRequest";
import {TokenService} from "../../../services/token/token.service";
import {findStateInverse} from "../../../core/utils/utils";
import {MessageService} from "primeng/api";
import {StoreService} from "../../../services/store/store.service";

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
  standalone: true,
  imports: [CdkDrag, NgClass, HlmBadgeDirective, HlmIconComponent, TodoSheetComponent, BrnSheetImports, HlmSheetComponent, HlmButtonDirective],
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Input() state!: "TODO" | "DONE";
  isPopup = signal(false);
  loading = signal(false);

  constructor(private taskService: TaskService, private tokenService: TokenService, private messageService: MessageService, private storeService: StoreService) {}


  drop(event: CdkDragDrop<Task>) {
    //@ts-ignore
    const updateTaskRequest: CreateTaskRequest = {
      category: this.task.category._id,
      description: this.task.description,
      name: this.task.name,
      state: this.task.state._id,
      user: this.tokenService.getUserId()
    }
    //@ts-ignore
    if (event.container.data[0] === undefined){
      updateTaskRequest.state = findStateInverse(this.task.state._id);
    } else {
      // @ts-ignore
      updateTaskRequest.state = event.container.data[0].state._id;
    }

    this.taskService.updateTask(this.task._id, updateTaskRequest).subscribe({
      next: (data) => {
        this.storeService.initializeTask(this.storeService.tasks().map(t => t._id === this.task._id ? data.data : t));
        console.log(this.storeService.tasks());
        this.showSuccess('Task Updated');
      },
      error: () => {
        this.showError('An error occurred')
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
        this.storeService.initializeTask(this.storeService.tasks().filter(t => t._id !== this.task._id));
        this.showSuccess('Task Deleted')
      },
      error: () => {
        this.showError('An error occurred')
        this.loading.set(false);
      }
    });
  }

  showSuccess(message: string) {
      this.messageService.add({severity:'success', summary: 'Success', detail: message});
  }

  showError(message: string) {
    this.messageService.add({severity:'error', summary: 'Error', detail: message});
  }
}
