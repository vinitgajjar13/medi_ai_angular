import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { SelectroleComponent } from './selectrole/selectrole.component';
import { OnboardingComponent } from './onboarding/onboarding.component';

const routes: Routes = [
  {
    path: '',
    component: SplashScreenComponent,
  },
  {
    path: 'selectrole',
    component: SelectroleComponent,
  },
  {
    path: 'onboarding',
    component: OnboardingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonsRoutingModule {}
