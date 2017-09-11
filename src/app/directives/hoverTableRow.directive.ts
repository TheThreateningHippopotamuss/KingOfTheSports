import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverTableRow]'
})
export class HoverTableRowDirective {

  constructor(public elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') onMouseOver() {
    this.changeColor('pointer', 'grey', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('initial', 'transparent', 'white');
  }

  private changeColor(cursor: string, backgroundColor: string, color: string) {
    this.renderer.setStyle(this.elRef.nativeElement, 'cursor', cursor);
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', backgroundColor);
    this.renderer.setStyle(this.elRef.nativeElement, 'color', color);
  }
}
