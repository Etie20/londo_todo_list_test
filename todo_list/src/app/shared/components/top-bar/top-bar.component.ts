import { Component } from '@angular/core';
import {LogoComponent} from "../logo/logo.component";
import {HlmIconComponent} from "../../libs/ui/ui-icon-helm/src";
import {provideIcons} from "@ng-icons/core";
import {lucideLogOut, lucideSiren} from "@ng-icons/lucide";
import {TokenService} from "../../../services/token/token.service";
import {User} from "../../../core/models/User";
import {HlmAvatarComponent, HlmAvatarFallbackDirective} from "../../libs/ui/ui-avatar-helm/src";
import {HlmTooltipImports} from "../../libs/ui/ui-tooltip-helm/src";
import {BrnTooltipContentDirective} from "@spartan-ng/ui-tooltip-brain";
import {HlmButtonDirective} from "../../libs/ui/ui-button-helm/src";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    LogoComponent,
    HlmIconComponent,
    HlmAvatarComponent,
    HlmAvatarFallbackDirective,
    HlmTooltipImports,
    BrnTooltipContentDirective,
    HlmButtonDirective
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
  providers: [provideIcons({lucideSiren, lucideLogOut})]
})
export class TopBarComponent {
  user: User;
  constructor(private tokenService: TokenService, private router: Router) {
    this.user = tokenService.getUserData();
  }
  logout(){
    this.tokenService.removeToken();
    this.router.navigate(['login']).then();
  }
}
