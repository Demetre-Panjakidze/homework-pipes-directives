import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[grid]',
})
export class TestDirective2 {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.display = 'grid';
    this.el.nativeElement.style.gridTemplateColumns = 'repeat(10, 1fr)';
    this.el.nativeElement.style.gap = '10px';
  }
}
