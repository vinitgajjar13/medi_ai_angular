import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Common/commons-module').then((m) => m.CommonsModule),
  },
  {
    path: 'doctor',
    loadChildren: () =>
      import('./Doctor/doctor-module').then((m) => m.DoctorModule),
  },
  {
    path: 'patient',
    loadChildren: () =>
      import('./Patient/patient-module').then((m) => m.PatientModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
