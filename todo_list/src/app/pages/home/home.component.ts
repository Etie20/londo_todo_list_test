import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HlmIconComponent} from "../../shared/libs/ui/ui-icon-helm/src";
import {provideIcons} from "@ng-icons/core";
import {lucideSearch, lucideTornado} from "@ng-icons/lucide";
import {HlmInputDirective} from "../../shared/libs/ui/ui-input-helm/src";
import { BrnSelectImports } from '@spartan-ng/ui-select-brain';
import { HlmSelectImports } from '../../shared/libs/ui/ui-select-helm/src';
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
import {HlmButtonDirective} from "../../shared/libs/ui/ui-button-helm/src";
import {CategoryService} from "../../services/category/category.service";
import {Base} from "../../core/models/Base";

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
    HlmButtonDirective,
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
  categories!: Base[];

  constructor(private fb: FormBuilder, private taskService: TaskService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.findAllCategories().subscribe(data => {
      this.categories = data.data;
      this.categories.push({_id:"NONE", name:"NONE", __v:0});
    });
    this.taskService.findAllTasks().subscribe(data => {
      this.todo = data.data.filter(data => data.state.name === 'TODO');
      this.filteredTodoTasks = this.todo;
      this.done = data.data.filter(data => data.state.name === 'DONE');
      this.filteredDoneTasks = this.done;
    });
    this.categoryForm = this.fb.group({
      category: ['NONE']
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

  filterByCategory(){
    console.log(this.categoryForm.value['category']);
    if (this.categoryForm.value['category'] === 'NONE'){
      this.filteredTodoTasks = this.todo;
      this.filteredDoneTasks = this.done;
    } else {
      this.filteredTodoTasks = this.todo.filter(value => value.category.name === this.categoryForm.value['category']);
      this.filteredDoneTasks = this.done.filter(value => value.category.name === this.categoryForm.value['category']);
    }
  }
}
