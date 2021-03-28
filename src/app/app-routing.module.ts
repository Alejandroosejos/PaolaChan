import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./Home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'plagicidas',
    loadChildren: () => import('./views/plagicidas/plagicidas.module').then( m => m.PlagicidasPageModule)
  },
  {
    path: 'fertilizantes',
    loadChildren: () => import('./views/fertilizantes/fertilizantes.module').then( m => m.FertilizantesPageModule)
  },
  {
    path: 'insecticidas',
    loadChildren: () => import('./views/insecticidas/insecticidas.module').then( m => m.InsecticidasPageModule)
  },
  {
    path: 'tierra',
    loadChildren: () => import('./views/tierra/tierra.module').then( m => m.TierraPageModule)
  },
  {
    path: 'cultivo',
    loadChildren: () => import('./views/cultivo/cultivo.module').then( m => m.CultivoPageModule)
  },
  {
    path: 'aplicacion',
    loadChildren: () => import('./views/aplicacion/aplicacion.module').then( m => m.AplicacionPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./views/nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
