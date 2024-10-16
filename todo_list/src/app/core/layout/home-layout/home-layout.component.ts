import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {LogoComponent} from "../../../shared/components/logo/logo.component";
import {HlmIconComponent} from "../../../shared/libs/ui/ui-icon-helm/src";
import {provideIcons} from '@ng-icons/core';
import {lucideSettings} from '@ng-icons/lucide';
import {TopBarComponent} from "../../../shared/components/top-bar/top-bar.component";
import {SideBarComponent} from "../../../shared/components/side-bar/side-bar.component";

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    LogoComponent,
    HlmIconComponent,
    TopBarComponent,
    SideBarComponent
  ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css',
  providers: [provideIcons({lucideSettings})]
})
export class HomeLayoutComponent {

}
