import { Component } from '@angular/core';
import {HlmButtonDirective} from "../../../shared/libs/ui/ui-button-helm/src";
import {HlmInputDirective} from "../../../shared/libs/ui/ui-input-helm/src";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HlmButtonDirective,
    HlmInputDirective,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
