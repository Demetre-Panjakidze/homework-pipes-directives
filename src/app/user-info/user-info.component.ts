import { Component, OnInit } from '@angular/core';
import json from '../../assets/data/data.json';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  data = json;
  ngOnInit() {
    console.log(this.data);
  }
}
