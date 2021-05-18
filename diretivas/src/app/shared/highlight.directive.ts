import { HostBinding, Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
      this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
      this.backgroundColor = 'white';
  }

  @HostBinding('style.backgrouColor') backgroundColor: string;

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';


  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
