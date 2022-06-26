import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { MangasRoutingModule } from './mangas-routing.module';
import { MangasComponent } from './mangas/mangas.component';
import { MangaFormComponent } from './manga-form/manga-form.component';


@NgModule({
  declarations: [
    MangasComponent,
    MangaFormComponent
  ],
  imports: [
    CommonModule,
    MangasRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class MangasModule { }
