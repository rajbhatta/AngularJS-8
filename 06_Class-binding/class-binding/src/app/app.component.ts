import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
  
  <h2>Testing class binding </h2>

  <h2 class="text-success">Testing class binding by HTML attribute </h2>

  <h2 [class]="successClass">Testing class binding by Class Binding </h2>

  <h2 class="text-success" [class]="successClass">Testing class binding by HTML attribute and Class binding </h2>
  
  <h2 [class.text-danger]="hasError">Testing class binding by evaluating a expression </h2>

<div>`,
  styles: [`

 .text-success
 {
   color:green;
 }

 .text-danger
 {
   color:red;
 }

 .text-special
 {
   font-style:italic;
 }


  `]
})
export class AppComponent {
  title = 'class-binding';

  successClass="text-success";

  hasError="true";



}
