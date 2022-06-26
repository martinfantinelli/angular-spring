import { MangasService } from './../services/mangas.service';
import { Manga } from './../model/manga';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.scss']
})
export class MangasComponent implements OnInit {

  mangas$: Observable<Manga[]>;
  displayedColumns = ['name', 'category'];

  constructor(private mangasService: MangasService) {

    this.mangas$ = this.mangasService.list();

   }

  ngOnInit(): void {

  }

}
