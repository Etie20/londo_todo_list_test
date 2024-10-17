import { Component } from '@angular/core';
import {LogoComponent} from "../logo/logo.component";
import {HlmIconComponent} from "../../libs/ui/ui-icon-helm/src";
import {provideIcons} from "@ng-icons/core";
import {lucideSiren} from "@ng-icons/lucide";
import {TokenService} from "../../../services/token/token.service";
import {User} from "../../../core/models/User";
import {HlmAvatarComponent, HlmAvatarFallbackDirective} from "../../libs/ui/ui-avatar-helm/src";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    LogoComponent,
    HlmIconComponent,
    HlmAvatarComponent,
    HlmAvatarFallbackDirective
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
  providers: [provideIcons({lucideSiren})]
})
export class TopBarComponent {
  user: User;
  constructor(private tokenService: TokenService) {
    this.user = tokenService.getUserData();
  }
}
