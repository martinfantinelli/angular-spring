import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { MangasService } from './../services/mangas.service';
import { Manga } from './../model/manga';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.scss']
})
export class MangasComponent implements OnInit {

  mangas$: Observable<Manga[]>;
  displayedColumns = ['name', 'category'];

  constructor(
    private mangasService: MangasService,
    public dialog: MatDialog) {

    this.mangas$ = this.mangasService.list().pipe(
      catchError(error => {
        this.onError('WTF you did u fkn piece of shit')
        return of([])
      })
    );

   }

   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

}
