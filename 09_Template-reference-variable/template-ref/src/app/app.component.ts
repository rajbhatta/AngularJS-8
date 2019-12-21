import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
                
                  <input type="text" #phone placeholder="Enter value of phone" />

                  <button (click)="onClick(phone.value)">Test</button>
  
                <div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-ref';

  onClick(value)
  {
    alert('helllo'+value);
  }

}
