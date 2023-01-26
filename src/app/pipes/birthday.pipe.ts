import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthday',
})
export class BirthdayPipe implements PipeTransform {
  transform(value: string): number {
    const birthdate = new Date(value);
    const today = new Date();
    return Math.floor((today.getTime() - birthdate.getTime()) / 31557600000);
  }
}
