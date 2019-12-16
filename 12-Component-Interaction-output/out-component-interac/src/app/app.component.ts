import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'out-component-interac';

  greet()
  {
    alert('hello world from parent component');
  }
}
