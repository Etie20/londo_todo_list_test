import {Component, ViewEncapsulation} from '@angular/core';
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideSearch, lucideTornado} from "@ng-icons/lucide";
import {HlmInputDirective} from "../../shared/libs/ui/ui-input-helm/src";
import { BrnSelectImports } from '@spartan-ng/ui-select-brain';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {TaskCardComponent} from "../../shared/components/task-card/task-card.component";
import {TaskListComponent} from "../../shared/components/task-list/task-list.component";
import {Task} from "../../core/model/Task";

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
export class HomeComponent {
  categoryForm!: FormGroup;
  todo: Task[] = [
    {
      name:'Get to work',
      state: 'TODO',
      category: 'WORK'
    },
    {
      name:'Pick up groceries',
      state: 'TODO',
      category: 'STUDY'
    },
    {
      name:'Fall asleep',
      state: 'TODO',
      category: 'PERSONAL'
    },
    {
      name:'Go home',
      state: 'TODO',
      category: 'PERSONAL'
    },
  ];
  done: Task[] = [
    {
      name:'Check e-mail',
      state: 'DONE',
      category: 'WORK'
    },
    {
      name:'Get up',
      state: 'DONE',
      category: 'STUDY'
    },
    {
      name:'Brush teeth',
      state: 'DONE',
      category: 'PERSONAL'
    },
    {
      name:'Walk dog',
      state: 'DONE',
      category: 'PERSONAL'
    },
  ];

  constructor(private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      category: ['None']
    })
  }
}
