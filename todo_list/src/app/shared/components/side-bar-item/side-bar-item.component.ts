import {Component, Input, OnInit, signal} from '@angular/core';
import {HlmButtonDirective} from "../../libs/ui/ui-button-helm/src";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {Router} from "@angular/router";
import {NavItem} from "../../../core/utils/interfaces/NavItem";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-side-bar-item',
  standalone: true,
  imports: [
    HlmButtonDirective,
    HlmIconComponent,
    NgClass
  ],
  templateUrl: './side-bar-item.component.html',
  styleUrl: './side-bar-item.component.css'
})
export class SideBarItemComponent implements OnInit{
  @Input() item!: NavItem;
  isSelected = signal(false);
  currentRoute = signal('/');

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.currentRoute.set(this.router.url.split('/')[1]);
    this.isSelected.set(`/${this.currentRoute()}` === this.item.link);
  }
}
