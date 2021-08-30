import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appCustomstyle]'
})
export class CustomstyleDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color="orange";
  }

}
