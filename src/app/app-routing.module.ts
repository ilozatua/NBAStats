import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   canActivate: [],
  //   loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  // },
  // {
  //   path: 'catalogue',
  //   canActivate: [],
  //   loadChildren: () =>
  //     import('./catalogue/catalogue.module').then((m) => m.CatalogueModule),
  // },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
