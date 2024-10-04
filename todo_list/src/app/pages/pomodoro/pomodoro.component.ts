import {Component, OnInit} from '@angular/core';
import {AnimationOptions, LottieComponent} from "ngx-lottie";
import {AnimationItem} from "lottie-web";
import {HlmButtonDirective} from "../../shared/libs/ui/ui-button-helm/src";

@Component({
  selector: 'app-pomodoro',
  standalone: true,
  imports: [
    LottieComponent,
    HlmButtonDirective
  ],
  templateUrl: './pomodoro.component.html',
  styleUrl: './pomodoro.component.css'
})
export class PomodoroComponent {
  private animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
    path: '/assets/animations/comming_soon.json',
    loop: true,
    autoplay: false
  };

  play(): void {
    if (this.animationItem) {
      this.animationItem.play();
    }
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
