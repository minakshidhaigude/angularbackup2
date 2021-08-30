import { Component } from '@angular/core';
import { CommnService } from './commn.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any;
  constructor(private ser:CommnService){
    this.ser.getData("This message coming from service");
    
  }
  title = 'secondprj';
  employee:any=[
    {
    code:'100',name:'soham',gender:'male',salary:60000
    },
    {
      code:'101',name:'mitali',gender:'female',salary:70000
      },
      {
        code:'103',name:'sangram',gender:'male',salary:60000
        },
        {
          code:'104',name:'eshita',gender:'female',salary:80000
          },
];
  /*user={
    firstname:'soham',
    city:'mumbai',
 
  };*/
}
