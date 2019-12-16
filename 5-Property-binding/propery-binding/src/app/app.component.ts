import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `<div>
                  <h2>Working with Property Binding</h2>
                  <input type="text" [id]="carName" />
                  <input type="text" class="calculator-screen" [value]="currentNumber" disabled />
                  <img [src]="imgUrl"/>
                <div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'propery-binding';
  currentNumber = '0';
  carName="Hundai-Elantra";
  imgUrl="https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png";  


}
