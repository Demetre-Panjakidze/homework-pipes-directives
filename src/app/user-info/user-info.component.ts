import { Component, OnInit } from '@angular/core';
import json from '../../assets/data/data.json';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  data = json;
  loading: boolean = false;
  loaded: boolean = false;
  message: boolean = true;
  btnTxt: string = 'Load Users';

  ngOnInit() {}

  loadData() {
    if (this.message) {
      this.loading = true;
      this.loaded = false;
      this.message = false;

      new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      }).then(() => {
        this.loading = false;
        this.loaded = true;
        this.btnTxt = 'Clear';
      });
    } else {
      this.loaded = false;
      this.btnTxt = 'Load Users';
      this.message = true;
    }
  }
}
