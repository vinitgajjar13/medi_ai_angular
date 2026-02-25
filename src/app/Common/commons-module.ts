import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing-module';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { SelectroleComponent } from './selectrole/selectrole.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SplashScreenComponent,
    OnboardingComponent,
    SelectroleComponent,
  ],
  imports: [CommonModule, FormsModule, CommonsRoutingModule],
})
export class CommonsModule {}
