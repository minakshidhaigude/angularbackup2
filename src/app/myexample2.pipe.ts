import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myexample2'
})
export class Myexample2Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
