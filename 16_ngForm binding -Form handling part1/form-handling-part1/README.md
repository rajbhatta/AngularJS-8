## Form Handling in Angular 8 ##
```
1. import { FormsModule } from '@angular/forms'; // inside app.module.ts
2. imports: [                                    // Add forms module
    BrowserModule,
    FormsModule
  ],
```
3. Write template reference variable inside ```<form #userForm="ngForm">```
4. Provide name and ngModel for each element ``` <input type="email" class="form-control" name="email" ngModel>```



