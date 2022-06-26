import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'Shonen' : return 'skateboarding';
      case 'Hentai' : return 'explicit';
    }
    return 'hail';
  }

}
