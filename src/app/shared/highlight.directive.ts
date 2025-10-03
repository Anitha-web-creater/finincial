import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  constructor(private el: ElementRef, private r: Renderer2) {
    r.setStyle(el.nativeElement, 'padding', '8px');
  }
  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement, 'background', '#f1f5f9');
  }
  @HostListener('mouseleave') onLeave() {
    this.r.removeStyle(this.el.nativeElement, 'background');
  }
}
