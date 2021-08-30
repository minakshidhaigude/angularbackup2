import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { MyexamplePipe } from './myexample.pipe';
import { CustomstyleDirective } from './customstyle.directive';
import { CommnService } from './commn.service';
import { Myexample2Pipe } from './myexample2.pipe';
import { Customstyle1Directive } from './customstyle1.directive';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    MyexamplePipe,
    CustomstyleDirective,
    Myexample2Pipe,
    Customstyle1Directive,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CommnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
