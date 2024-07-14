import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorComponent,
    children: [
      { path: '', redirectTo: '404', pathMatch: 'full' },
      {
        path: '404',
        loadComponent: () =>
          import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
      },
      {
        path: '403',
        loadComponent: () =>
          import('./pages/not-authorize/not-authorize.component').then(
            (m) => m.NotAuthorizeComponent,
          ),
      },
      {
        path: '500',
        loadComponent: () =>
          import('./pages/server-error/server-error.component').then((m) => m.ServerErrorComponent),
      },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
