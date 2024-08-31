import {Component, signal} from '@angular/core';
import {HlmButtonDirective} from "../../../shared/libs/ui/ui-button-helm/src";
import {HlmInputDirective} from "../../../shared/libs/ui/ui-input-helm/src";
import {HlmSpinnerComponent} from "../../../shared/libs/ui/ui-spinner-helm/src";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    HlmButtonDirective,
    HlmInputDirective,
    HlmSpinnerComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  loading = signal(false)
}
