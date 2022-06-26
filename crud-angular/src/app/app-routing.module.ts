import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'prefix', redirectTo: 'mangas'},
  {
    path: 'mangas',
    loadChildren: () => import('./mangas/mangas.module').then(m => m.MangasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
