import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {LogoComponent} from "../../../shared/components/logo/logo.component";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {provideIcons} from '@ng-icons/core';
import {lucideSettings} from '@ng-icons/lucide';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    LogoComponent,
    HlmIconComponent
  ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css',
  providers: [provideIcons({lucideSettings})]
})
export class HomeLayoutComponent {

}
