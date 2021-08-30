import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  courses = ['Engineering','Medical','Architecture','Biotech','MSW'];
  constructor(private fb:FormBuilder) { }
  userform:any = FormGroup;
  ngOnInit(): void {
    this.userform = this.fb.group({
    fname:['',[Validators.required,Validators.minLength(4)]],
    lname:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    phno:['',[Validators.required,Validators.minLength(10)]],
    password:['',[Validators.required]],
    selectcourse:['',[Validators.required]],
    gender:['',[Validators.required]],
    message:['',[Validators.required]],
    })
  }
   get getcontrol(){
    return this.userform.controls;
  }
  onsubmit(){
    console.log(this.userform.value);
   }

}
