import { Player } from './../../models/player';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPlayersByNumber'
})
export class SortPlayersByNumberPipe implements PipeTransform {

  transform(array: Player[]) {
    if (array !== undefined) {
        array.sort((a, b) => {
        return a.jerseyNumber - b.jerseyNumber;
      });
    }

    return array;
  }
}
