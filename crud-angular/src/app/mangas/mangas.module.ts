import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { MangasRoutingModule } from './mangas-routing.module';
import { MangasComponent } from './mangas/mangas.component';


@NgModule({
  declarations: [
    MangasComponent
  ],
  imports: [
    CommonModule,
    MangasRoutingModule,
    AppMaterialModule
  ]
})
export class MangasModule { }