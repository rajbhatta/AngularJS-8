## Working with interpolation in Angular JS 8 ## 
String Interpolation is a one-way databinding technique which is used to output the data from a TypeScript code to HTML template (view). It uses the template expression in double curly braces to display the data from the component to the view. String interpolation adds the value of a property from the component.

For example:
{{ data }}

Let us consider the content of app.component.ts as given below:
```js
import { Component } from '@angular/core';    
@Component({    
  selector: 'app-root',    
  templateUrl: './app.component.html',    
  styleUrls: ['./app.component.css']    
})    
export class AppComponent {    
  title = 'Data binding example using String Interpolation';    
}   
```
Let us consider the content of  app.component.html
```
<h2>    
  {{ title }}    
</h2>  
```
