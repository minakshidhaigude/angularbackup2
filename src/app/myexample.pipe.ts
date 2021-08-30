import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myexample'
})
export class MyexamplePipe implements PipeTransform {
display:any;
  transform(value: string,gender:string): any {
    if (gender == "male"){
      this.display = "Mr." + value;
     // return this.display;
    }
    else {
    this.display = "Miss." + value;
    console.log(this.display);
    //return this.display;

    }
    return this.display;
    
  }

}
