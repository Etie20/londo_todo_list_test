import {Component, Input, OnInit, signal} from '@angular/core';
import {
  HlmSheetComponent,
  HlmSheetContentComponent,
  HlmSheetDescriptionDirective,
  HlmSheetFooterComponent,
  HlmSheetHeaderComponent,
  HlmSheetTitleDirective
} from "@spartan-ng/ui-sheet-helm";

import {provideIcons} from "@ng-icons/core";
import {lucideCross} from "@ng-icons/lucide";
import {HlmButtonDirective} from "../../libs/ui/ui-button-helm/src";
import {HlmInputDirective} from "../../libs/ui/ui-input-helm/src";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {BrnSheetContentDirective, BrnSheetTriggerDirective} from "@spartan-ng/ui-sheet-brain";
import {BrnSelectImports} from "@spartan-ng/ui-select-brain";
import {HlmSelectImports} from "@spartan-ng/ui-select-helm";
import {CategoryService} from "../../../services/category/category.service";
import {Base} from "../../../core/models/Base";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {stateDefaultId} from "../../../constants/constants";
import {TaskService} from "../../../services/task/task.service";
import {CreateTaskRequest} from "../../../core/dtos/request/CreateTaskRequest";
import {HlmErrorDirective, HlmFormFieldComponent} from "@spartan-ng/ui-formfield-helm";
import {Task} from "../../../core/models/Task";
import {TokenService} from "../../../services/token/token.service";

@Component({
  selector: 'app-todo-sheet',
  standalone: true,
  imports: [
    BrnSheetTriggerDirective,
    BrnSheetContentDirective,
    HlmSheetComponent,
    HlmSheetContentComponent,
    HlmSheetHeaderComponent,
    HlmSheetFooterComponent,
    HlmSheetTitleDirective,
    HlmSheetDescriptionDirective,
    HlmButtonDirective,
    HlmInputDirective,
    HlmIconComponent,
    BrnSelectImports,
    HlmSelectImports,
    ReactiveFormsModule,
    HlmFormFieldComponent,
    HlmErrorDirective,
  ],
  templateUrl: './todo-sheet.component.html',
  styleUrl: './todo-sheet.component.css',
  providers: [provideIcons({ lucideCross })]
})
export class TodoSheetComponent implements OnInit{
  @Input() task!: Task;
  categories!: Base[];
  todoForm!: FormGroup;
  loading = signal(false);

  constructor(private categoryService: CategoryService,
              private fb: FormBuilder,
              private taskService: TaskService,
              private tokenService: TokenService
              ) {
  }

  ngOnInit(): void {
    this.categoryService.findAllCategories().subscribe({
      next: (data) => {
        this.categories = data.data;
        this.todoForm = this.fb.group({
          name: [this.task !== undefined?this.task.name:'', Validators.required],
          description: [this.task !== undefined?this.task.description:''],
          state: [this.task !== undefined?this.task.state._id:stateDefaultId, Validators.required],
          category: [this.task !== undefined?this.task.category._id:data.data[0]._id, Validators.required],
          user: [this.tokenService.getUserId(), Validators.required]
        });
      }
    });
  }

  onSubmit() {
    if (this.todoForm.invalid){
      return;
    } else {
      this.loading.set(true);
      const createTaskRequest: CreateTaskRequest = this.todoForm.getRawValue();
      if (this.task === undefined) {
        this.taskService.createTask(createTaskRequest).subscribe({
          complete: () => {
            location.reload();
          },
          error: () => {
            this.loading.set(false);
          }
        })
      } else {
        this.taskService.updateTask(this.task._id, createTaskRequest).subscribe({
          next: (data) => {
            location.reload();
          },
          error: () => {
            this.loading.set(false);
          }
        })
      }
    }
  }
}
