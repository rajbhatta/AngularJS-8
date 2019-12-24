## Form Handling in Angular 8: Part 1##
1. Make a modification inside  ```app.module.ts```
```
1.1 import { FormsModule } from '@angular/forms'; 
1.2 imports: [                                    // Add forms module
    BrowserModule,
    FormsModule
  ],
```
2. Write template reference variable inside ```<form #userForm="ngForm">```
3. Provide name and ngModel for each element ``` <input type="email" class="form-control" name="email" ngModel>```



