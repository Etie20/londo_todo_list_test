import {Component, signal} from '@angular/core';
import {HlmButtonDirective} from "../../../shared/libs/ui/ui-button-helm/src";
import {HlmInputDirective} from "../../../shared/libs/ui/ui-input-helm/src";
import {HlmSpinnerComponent} from "../../../shared/libs/ui/ui-spinner-helm/src";
import {AuthService} from "../../../services/auth/auth.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthRequest} from "../../../core/dtos/request/AuthRequest";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    HlmButtonDirective,
    HlmInputDirective,
    HlmSpinnerComponent,
    ReactiveFormsModule,
    ToastModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  loading = signal(false);
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private messageService: MessageService) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]]
    })
  }

  onSubmit() {
    if (this.registerForm.invalid){
      return;
    } else {
      this.loading.set(true);
      const authRequest: AuthRequest = this.registerForm.getRawValue();
      this.authService.register(authRequest).subscribe({
        complete: () => {
          this.router.navigate(['login']).then();
        },
        error: () => {
          this.loading.set(false);
          this.showError('User already exists/An error occurred')
        }
      })
    }
  }

  showError(message: string) {
    this.messageService.add({severity:'error', summary: 'Error', detail: message});
  }
}
