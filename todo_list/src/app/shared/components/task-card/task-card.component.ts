import {Component, Input} from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import {NgClass} from "@angular/common";
import {HlmBadgeDirective} from "@spartan-ng/ui-badge-helm";
import { Task } from '../../../core/model/Task';
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
  standalone: true,
  imports: [CdkDrag, NgClass, HlmBadgeDirective, HlmIconComponent]
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Input() state!: "TODO" | "DONE"
}
