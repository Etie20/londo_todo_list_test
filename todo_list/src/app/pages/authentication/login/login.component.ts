import {Component, signal} from '@angular/core';
import {HlmButtonDirective} from "../../../shared/libs/ui/ui-button-helm/src";
import {HlmInputDirective} from "../../../shared/libs/ui/ui-input-helm/src";
import {HlmSpinnerComponent} from "../../../shared/libs/ui/ui-spinner-helm/src";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HlmButtonDirective,
    HlmInputDirective,
    HlmSpinnerComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loading = signal(false);
}
