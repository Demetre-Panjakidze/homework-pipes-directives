import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[grid-container]',
})
export class TestDirective2 {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.width = '240px';
    this.el.nativeElement.style.display = 'grid';
    this.el.nativeElement.style.gridTemplateColumns = 'repeat(7, 1fr)';
    this.el.nativeElement.style.gap = '5px';
  }
}
