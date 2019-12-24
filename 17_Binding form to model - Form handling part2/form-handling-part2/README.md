1. Type ```ng generate class User``` in Angular CLI
2. Put class properties as given below:

``` export class User{
    email:string;
    password:string;
} ```

3. put ```[(ngModel)]="user.email"``` inside each HTML element as  ```<input type="text" [(ngModel)]="user.email" 
          class="form-control"
          id="email"
          name="email"
          #name="ngModel">```