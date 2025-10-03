import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'shortNumber'})
export class ShortNumberPipe implements PipeTransform {
  transform(value: number): string {
    if (!value && value !== 0) return '';
    if (value >= 1000000) return (value/1000000).toFixed(2) + 'M';
    if (value >= 1000) return (value/1000).toFixed(2) + 'K';
    return value.toString();
  }
}
