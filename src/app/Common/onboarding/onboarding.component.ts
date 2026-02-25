import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Slide {
  img: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  standalone: false,
})
export class OnboardingComponent implements OnInit {
  slides: Slide[] = [
    {
      img: 'assets/on boarding 1.png',
      title: 'Welcome to Medi‑AI',
      description:
        'Your trusted healthcare companion for easy and reliable medical care anytime, anywhere.',
    },
    {
      img: 'assets/on boarding 2.png',
      title: 'Understand Your Symptoms Instantly',
      description:
        'Smarter movement, faster recovery. Advanced robotics and human expertise working together for your health.',
    },
    {
      img: 'assets/on boarding 3.png',
      title: 'Your Personal Health Knowledge Hub',
      description:
        'Our AI engine tracks your range of motion and milestones in real‑time, adapting to your unique needs at every step.',
    },
  ];

  currentIndex = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    } else {
      // last slide, go to selectrole
      this.router.navigate(['/selectrole']);
    }
  }

  skip() {
    // jump to last slide
    this.currentIndex = this.slides.length - 1;
  }
}
