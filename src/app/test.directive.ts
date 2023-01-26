import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appTest]',
})
export class TestDirective {
  isTrue: boolean = true;
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.width = '30px';
    this.el.nativeElement.style.height = '30px';
    this.el.nativeElement.style.backgroundColor = 'black';
    this.el.nativeElement.style.cursor = 'pointer';
    this.el.nativeElement.style.display = 'flex';
    this.el.nativeElement.style.justifyContent = 'center';
    this.el.nativeElement.style.alignItems = 'center';
    this.el.nativeElement.style.color = 'yellow';
  }

  @HostListener('click')
  fn() {
    if (this.isTrue) {
      this.isTrue = !this.isTrue;
      this.el.nativeElement.style.backgroundColor = 'blue';
      this.el.nativeElement.innerText = '1';
    } else {
      this.isTrue = !this.isTrue;
      this.el.nativeElement.style.backgroundColor = 'black';
      this.el.nativeElement.innerText = '0';
    }
  }

  @HostBinding('style')
  bla = 'background: red';
}
