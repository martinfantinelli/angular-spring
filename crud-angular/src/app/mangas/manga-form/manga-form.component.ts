import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MangasService } from './../services/mangas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manga-form',
  templateUrl: './manga-form.component.html',
  styleUrls: ['./manga-form.component.scss']
})
export class MangaFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: MangasService,
    private snackBar: MatSnackBar,
    private location: Location) {
   this.form = this.formBuilder.group({
    name: [null],
    category: [null]
   });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => this.onSucess(),
    error => this.onError());
    };

  onCancel() {
    this.location.back();
  }

  private onError() {
    this.snackBar.open('Error, you fucked up again', '', {duration: 5000});
  }

  private onSucess() {
    this.snackBar.open('Nice, got it bro', '', {duration: 5000})
    this.location.back();
  }
}
