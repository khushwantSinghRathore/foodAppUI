import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'splashscreen',
    pathMatch: 'full',
  },
  {
    path: 'splashscreen',
    loadChildren: () =>
      import('./screens/splashscreen/splashscreen.module').then(
        (m) => m.SplashscreenPageModule
      ),
  },
  {
    path: 'slider',
    loadChildren: () =>
      import('./screens/slider/slider.module').then((m) => m.SliderPageModule),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./screens/welcome/welcome.module').then(
        (m) => m.WelcomePageModule
      ),
  },
  {
    path: 'sigin',
    loadChildren: () =>
      import('./screens/sigin/sigin.module').then((m) => m.SiginPageModule),
  },
  {
    path: 'sigup',
    loadChildren: () =>
      import('./screens/sigup/sigup.module').then((m) => m.SigupPageModule),
  },
  {
    path: 'forgetpass',
    loadChildren: () =>
      import('./screens/forgetpass/forgetpass.module').then(
        (m) => m.ForgetpassPageModule
      ),
  },
  {
    path: 'resetpass',
    loadChildren: () =>
      import('./screens/resetpass/resetpass.module').then(
        (m) => m.ResetpassPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}