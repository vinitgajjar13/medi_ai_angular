import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// standalone components need not be declared here
import { OnboardingComponent } from './onboarding/onboarding.component';

@NgModule({
  declarations: [AppComponent, SplashScreenComponent, OnboardingComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    FormsModule,
    // standalone components can be imported if needed, but routing loads them directly
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
