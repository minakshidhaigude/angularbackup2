import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommnService {

  constructor() { }
  getData(arg:any){
    console.log(arg);
  }
}
