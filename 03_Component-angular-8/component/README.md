## Working with component in Angular JS 8 ##
1. How to create component using Angular CLI in visual studio

1.1 Goto your project by typing CD project_name

1.2 Then type command given below in visual studio code terminal
```
ng g component home
```
This command will create 
```
CREATE src/app/home/home.component.html (19 bytes)  
CREATE src/app/home/home.component.spec.ts (614 bytes)  
CREATE src/app/home/home.component.ts (261 bytes)  
CREATE src/app/home/home.component.css (0 bytes)  
```
where first home.component.html represents view or HTML elements, home.component.css represents css for home.component.html and home.component.ts represents all the logic such as binding to model

### Dissecting home.component.ts element inside component (Option 1) ###
```
import { Component } from '@angular/core';

@Component({
**selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']**
})
export class AppComponent {
  title = 'service-demo';
}
```

### Dissecting home.component.ts element inside component (Option 2) ###
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
**template: `
  <h3>Employee List </h3>
  <ul *ngFor="let employee of employees">
	  <li>{{employee.id}} || {{employee.name}} || {{employee.age}}
  </ul> 
  `,
  styles: ['h3{color:red;}']**
})
export class AppComponent {
  title = 'service-demo';
}
```
