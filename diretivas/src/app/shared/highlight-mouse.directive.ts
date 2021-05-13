import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    /*this._renderer.setStyle(
      this._elementeRef.nativeElement,
      'background-color', 
      'yellow'
    );*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer.setStyle(
      this._elementeRef.nativeElement,
      'background-color', 
      'white'
    );*/
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgrouColor') backgroundColor: string;

  constructor(
    //private _elementeRef: ElementRef,
    //private _renderer: Renderer2
    ) { }

}
