## Class Binding in Angular JS 8 ##
The Angular Class binding is used to add or remove classes to and from the HTML elements. You can add CSS Classes conditionally to an element, hence creating a dynamically styled element.

The Angular provides the three ways to add/remove classes to and from the element. One using the DOM ClassName Property. The second option is to use the Class shorthand. The third option is to use the NgClass directive, which is covered in a separate tutorial.


### 1. Class binding with ClassName ### 
The ClassName is the property name of HTML Element. Hence we can make use of Property binding to assign the class name to any HTML element.

The following example assigns CSS Class red to the div element.
```
<div [className]="'red'">Test</div>
```
 
### 2. HTML Class attribute ###
You can also add class using the normal HTML way.
```
<div class="red">red</div>
```
but, mixing both class and [className] results in removal of class attribute. You cannot use both.
```
<div class="red" [className]="'size20'">red</div>
```

### 3. Conditionally apply Classes
We can also bind the class name dynamically.

To do that first create a variable in your component class.
```
cssStringVar: string= 'red size20';
``` 
And then use it in the Template as shown below.
```
<div [className]="cssStringVar">Test</div>
```

### Example of Class Binding in Angular JS 8 ###
```
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
```
