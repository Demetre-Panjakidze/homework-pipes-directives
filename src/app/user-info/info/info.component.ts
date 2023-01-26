import { Input, Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  @Input() info: any;
  @Input() index: number = 0;

  ngOnInit() {}
}
