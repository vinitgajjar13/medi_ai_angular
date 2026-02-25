import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  standalone: false,
})
export class SplashScreenComponent implements OnInit {
  logoVisible = false;
  titleVisible = false;
  subtitleVisible = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // trigger the animation sequence, adjusting delays as needed
    setTimeout(() => {
      this.logoVisible = true;
    }, 0);

    setTimeout(() => {
      this.titleVisible = true;
    }, 600);

    setTimeout(() => {
      this.subtitleVisible = true;
    }, 1200);

    // auto-redirect once animation is complete
    setTimeout(() => {
      this.router.navigate(['/onboarding']);
    }, 2200);
  }
}
