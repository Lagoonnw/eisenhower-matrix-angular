import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AlertModule} from "ngx-bootstrap/alert";
import { TaskCardComponent } from './components/task-card/task-card.component';
import { GradientAnimationDirective } from './directives/gradient-animation.directive';
import {ClampyModule} from "@clampy-js/ngx-clampy";

@NgModule({
  declarations: [
    AppComponent,
    TaskCardComponent,
    GradientAnimationDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    ClampyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
