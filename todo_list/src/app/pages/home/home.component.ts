import {Component, computed, OnInit, Signal, ViewEncapsulation} from '@angular/core';
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
import {ToastModule} from "primeng/toast";
import {StoreService} from "../../services/store/store.service";

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
    ToastModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [provideIcons({lucideSearch, lucideTornado})],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit{
  categoryForm!: FormGroup;
  filteredTodoTasks: Signal<Task[]> = computed(() => this.storeService.tasks().filter(data => data.state.name === 'TODO'));
  filteredDoneTasks: Signal<Task[]> = computed(() => this.storeService.tasks().filter(data => data.state.name === 'DONE'));
  categories!: Base[];

  constructor(private fb: FormBuilder, private taskService: TaskService, private categoryService: CategoryService, private storeService: StoreService) {
  }

  ngOnInit(): void {
    this.categoryService.findAllCategories().subscribe(data => {
      this.categories = data.data;
      this.categories.push({_id:"NONE", name:"NONE", __v:0});
    });
    this.taskService.findAllTasks().subscribe(data => {
      this.storeService.initializeTask(data.data);
    });
    this.categoryForm = this.fb.group({
      category: ['NONE']
    });
  }

  search(event: any) {
    const searchTerm: string = event.target.value;
    if (searchTerm.trim() !== ''){
      this.storeService.setTasks(this.storeService.tasks().filter(data => data.name.toLowerCase().includes(searchTerm)));
    }else{
      this.storeService.resetTask();
    }
  }

  filterByCategory(){
    if (this.categoryForm.value['category'] === 'NONE'){
      this.storeService.resetTask();
    } else {
      this.storeService.setTasks(this.storeService.tasks().filter(value => value.category.name === this.categoryForm.value['category']));
    }
  }
}
