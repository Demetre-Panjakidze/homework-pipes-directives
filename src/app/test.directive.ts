import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]',
})
export class TestDirective {
  isTrue: boolean = true;
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.width = '30px';
    this.el.nativeElement.style.height = '30px';
    this.el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseover')
  fn() {
    if (this.isTrue) {
      this.isTrue = !this.isTrue;
      this.el.nativeElement.style.backgroundColor = 'blue';
    } else {
      this.isTrue = !this.isTrue;
      this.el.nativeElement.style.backgroundColor = 'red';
    }
  }
}
