import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
  
  <h2>Event handling in Angular JS 8 </h2>
  
  <button (click)="clickFunction()">Click Here</button>

<div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-binding';

  clickFunction(){    
    alert('Button clicked');   
  }  

}
