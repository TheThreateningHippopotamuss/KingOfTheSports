import { Pipe, PipeTransform } from '@angular/core';
import { Competition } from '../../models/competitions';

@Pipe({
  name: 'filterLeagues'
})
export class FilterLeaguesPipe implements PipeTransform {

  transform(competitions: Competition[]): Competition[] {
    if (competitions !== undefined) {
        competitions = competitions.filter((c) => {
        return c.caption !== 'DFB-Pokal 2017/18';
      });
    }

    return competitions;
  }
}
