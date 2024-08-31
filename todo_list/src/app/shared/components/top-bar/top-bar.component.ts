import { Component } from '@angular/core';
import {LogoComponent} from "../logo/logo.component";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideSiren} from "@ng-icons/lucide";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    LogoComponent,
    HlmIconComponent
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
  providers: [provideIcons({lucideSiren})]
})
export class TopBarComponent {

}
