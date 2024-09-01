import { Component } from '@angular/core';
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";
import {provideIcons} from "@ng-icons/core";
import {lucideSearch, lucideTornado} from "@ng-icons/lucide";
import {HlmInputDirective} from "../../shared/libs/ui/ui-input-helm/src";
import { BrnSelectImports } from '@spartan-ng/ui-select-brain';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HlmIconComponent,
    HlmInputDirective,
    BrnSelectImports,
    HlmSelectImports,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [provideIcons({lucideSearch, lucideTornado})]
})
export class HomeComponent {
  categoryForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      category: ['None']
    })
  }
}
