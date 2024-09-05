import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideSearch, lucideTornado} from "@ng-icons/lucide";
import {HlmInputDirective} from "../../shared/libs/ui/ui-input-helm/src";
import { BrnSelectImports } from '@spartan-ng/ui-select-brain';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';
import {TaskCardComponent} from "../../shared/components/task-card/task-card.component";
import {TaskListComponent} from "../../shared/components/task-list/task-list.component";
import {Task} from "../../core/models/Task";
import {TaskService} from "../../services/task/task.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HlmIconComponent,
    HlmInputDirective,
    BrnSelectImports,
    HlmSelectImports,
    ReactiveFormsModule,
    CdkDropList,
    CdkDropListGroup,
    CdkDrag,
    TaskCardComponent,
    TaskListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [provideIcons({lucideSearch, lucideTornado})],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit{
  categoryForm!: FormGroup;
  filteredTodoTasks: Task[] = [];
  filteredDoneTasks: Task[] = [];
  todo: Task[] = [];
  done: Task[] = [];

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.categoryForm = this.fb.group({
      category: ['None']
    })
  }

  ngOnInit(): void {
    this.taskService.findAllTasks().subscribe(data => {
      this.todo = data.data.filter(data => data.state.name === 'TODO');
      this.filteredTodoTasks = this.todo;
      this.done = data.data.filter(data => data.state.name === 'DONE');
      this.filteredDoneTasks = this.done;
    });
  }

  search(event: any) {
    const searchTerm: string = event.target.value;
    if (searchTerm.trim() !== ''){
      this.filteredTodoTasks = this.todo.filter(value => value.name.toLowerCase().includes(searchTerm.trim().toLowerCase()));
      this.filteredDoneTasks = this.done.filter(value => value.name.toLowerCase().includes(searchTerm.trim().toLowerCase()));
    }else{
      this.taskService.findAllTasks().subscribe(data => {
        this.filteredTodoTasks = this.todo;
        this.filteredDoneTasks = this.done;
      });
    }
  }
}
