import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
  
  <p [style.background-color]="'green'"> Style Binding in Angular JS 8 

  <p [ngStyle]="myStyles">
 Style Binding using ngStyle="value" method
</p>


<p [ngStyle]="{'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold'}">
  Style Binding using inline and ngStyle 
</p>

<p [ngStyle]="setMyStyles()">
 Style binding using return method
</p>

  
<div>`,
  styles: []
})
export class AppComponent 
{
  title = 'style-binding-exm';

  setMyStyles()
  {
    let styles = {
      'background-color':  'red',
      'font-weight': 'bold'
    };
    return styles;
  }

  myStyles={
    'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold'
  }
}
