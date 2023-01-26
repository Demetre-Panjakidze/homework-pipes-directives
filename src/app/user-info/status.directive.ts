import { HostListener } from '@angular/core';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appStatus]',
})
export class StatusDirective implements OnInit {
  @Input() info: any;
  @Input() index: number = 0;
  isYellow: boolean = false;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.info.status == 'Active') {
      this.el.nativeElement.style.backgroundColor = 'green';
    } else if (this.info.status == 'Inactive') {
      this.el.nativeElement.style.backgroundColor = 'blue';
    }
  }

  @HostListener('click')
  fn() {
    if (this.isYellow) {
      this.isYellow = !this.isYellow;
      this.el.nativeElement.style.backgroundColor = 'yellow';
      this.el.nativeElement.style.color = 'black';
    } else {
      this.isYellow = !this.isYellow;
      this.el.nativeElement.style.color = 'white';
      if (this.info.status == 'Active') {
        this.el.nativeElement.style.backgroundColor = 'green';
      } else if (this.info.status == 'Inactive') {
        this.el.nativeElement.style.backgroundColor = 'blue';
      } else {
        this.el.nativeElement.style.backgroundColor = 'red';
      }
    }
  }
}
