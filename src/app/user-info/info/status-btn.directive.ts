import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appStatusBtn]',
})
export class StatusBtnDirective implements OnInit {
  @Input() info: any;
  @Input() index: number = 0;
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.borderRadius = '5px';
    this.el.nativeElement.style.border = 'none';
  }

  ngOnInit() {
    if (this.info.status == 'Active') {
      this.el.nativeElement.style.backgroundColor = '#48b648';
    } else if (this.info.status == 'Inactive') {
      this.el.nativeElement.style.backgroundColor = '#4848e9';
      this.el.nativeElement.style.color = 'white';
    } else {
      this.el.nativeElement.style.backgroundColor = '#d64545';
    }
  }
}
