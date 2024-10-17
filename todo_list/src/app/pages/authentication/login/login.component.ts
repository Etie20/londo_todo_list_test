import {Component, signal} from '@angular/core';
import {HlmButtonDirective} from "../../../shared/libs/ui/ui-button-helm/src";
import {HlmInputDirective} from "../../../shared/libs/ui/ui-input-helm/src";
import {HlmSpinnerComponent} from "../../../shared/libs/ui/ui-spinner-helm/src";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthRequest} from "../../../core/dtos/request/AuthRequest";
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";
import {TokenService} from "../../../services/token/token.service";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HlmButtonDirective,
    HlmInputDirective,
    HlmSpinnerComponent,
    ReactiveFormsModule,
    ToastModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: []
})
export class LoginComponent {
  loading = signal(false);
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private tokenService: TokenService,
              private messageService: MessageService
              ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]]
    })
  }

  onSubmit() {
    if (this.loginForm.invalid){
      return;
    } else {
      this.loading.set(true);
      const authRequest: AuthRequest = this.loginForm.getRawValue();
      this.authService.login(authRequest).subscribe({
        next: (data) => {
          this.router.navigate(['home']).then();
          this.tokenService.saveToken(<string>data.token?.token);
          this.tokenService.saveUserData(data.data);
        },
        error: () => {
          this.loading.set(false)
          this.showError('Invalid Credentials/An error occurred')
        }
      })
    }
  }

  showError(message: string) {
    this.messageService.add({severity:'error', summary: 'Error', detail: message});
  }
}
