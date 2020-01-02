## Property Binding in Angular JS 8 ##
Property Binding is also a one-way data binding technique. In property binding, we bind a property of a DOM element to a field which is a defined property in our component TypeScript code. Actually Angular internally converts string interpolation into property binding.

For example:

<img [src]="imgUrl" />

Open app.componnt.ts file and add the following code:
```js
import { Component } from '@angular/core';    
@Component({    
  selector: 'app-root',    
  templateUrl: './app.component.html',    
  styleUrls: ['./app.component.css']    
})    
export class AppComponent {    
  title = "Data binding using Property Binding";      
  imgUrl="https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png";    
}   
```

Now, open app.component.html and use the following code for property binding:
```html
<img [src]="imgUrl" /> <!-- Property Binding -->   
```
