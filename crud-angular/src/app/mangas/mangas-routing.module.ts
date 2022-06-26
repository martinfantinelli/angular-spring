import { MangaFormComponent } from './manga-form/manga-form.component';
import { MangasComponent } from './mangas/mangas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', component: MangasComponent },
  { path: 'new', component: MangaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangasRoutingModule { }
