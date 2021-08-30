import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appCustomstyle1]'
})
export class Customstyle1Directive {

  constructor(private e1:ElementRef) {
    e1.nativeElement.style.color="blue";
   }

}
