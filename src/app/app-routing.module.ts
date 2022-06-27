import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'input-and-output',
    loadChildren: () => import('./input-and-output/input-and-output.module').then(m => m.InputAndOutputModule)
  },
  {
    path: 'binding',
    loadChildren: () => import('./bindings/bindings.module').then(m => m.BindingsModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

const preloadEnabled = false;
const routingConfig = preloadEnabled ? { preloadingStrategy: PreloadAllModules } : {};

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
