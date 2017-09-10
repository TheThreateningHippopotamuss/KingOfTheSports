import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyleTableTitles]'
})

export class StyleTableTitlesDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'color', 'yellow');
    renderer.setStyle(el.nativeElement, 'text-align', 'center');
  }
}
