import { Component } from '@angular/core';
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideNotebook, lucideTimer} from "@ng-icons/lucide";
import {HlmButtonDirective} from "../../libs/ui/ui-button-helm/src";
import {SideBarItemComponent} from "../side-bar-item/side-bar-item.component";
import {NavItem} from "../../../core/utils/interfaces/NavItem";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    HlmIconComponent,
    HlmIconComponent,
    HlmButtonDirective,
    SideBarItemComponent
  ],
  providers: [provideIcons({lucideNotebook, lucideTimer})],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  items: NavItem[] = [
    {
      title: 'Tasks',
      link: '/home',
      icon: 'lucideNotebook'
    },
    {
      title: 'Pomodoro',
      link: '/pomodoro',
      icon: 'lucideTimer'
    }
  ]
}
