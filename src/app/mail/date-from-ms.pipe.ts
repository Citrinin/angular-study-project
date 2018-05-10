import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFromMs'
})
export class DateFromMsPipe implements PipeTransform {

  transform(value: any, args?: any): Date | null {
    return value ? new Date(+value) : null;
  }

}
