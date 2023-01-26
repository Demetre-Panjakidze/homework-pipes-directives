import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appStatus]',
})
export class StatusDirective implements OnInit {
  @Input() info: any;
  @Input() index: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.info.status == 'Active') {
      this.el.nativeElement.style.backgroundColor = 'green';
    } else if (this.info.status == 'Inactive') {
      this.el.nativeElement.style.backgroundColor = 'yellow';
      this.el.nativeElement.style.color = 'black';
    }
  }
}
