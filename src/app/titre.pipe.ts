import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titre'
})
export class TitrePipe implements PipeTransform {

  transform(nom:string): string {
    return '--> '+nom+' <--';
    }
    

}
