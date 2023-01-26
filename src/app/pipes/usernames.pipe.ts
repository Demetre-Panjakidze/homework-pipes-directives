import { Pipe, PipeTransform } from '@angular/core';
import json from '../../assets/data/data.json';
@Pipe({
  name: 'usernames',
})
export class UsernamePipe implements PipeTransform {
  data = json;
  transform(value: string): any {
    const usernameArr: string[] = [];
    this.data.users.forEach((user) => {
      usernameArr.push(user.username);
    });
    console.log(usernameArr);
    return usernameArr.join(', ');
  }
}
