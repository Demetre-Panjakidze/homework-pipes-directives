import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'buttonSelect',
})
export class BtnSelect {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.margin = '10px 0 0';
    this.el.nativeElement.style.padding = '10px 0 0';
    this.el.nativeElement.style.borderRadius = '20px';
    console.log(this.el);
  }

  @HostListener('click')
  fn() {
    console.log('hi');
  }
}
