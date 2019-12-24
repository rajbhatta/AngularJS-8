import { Component } from '@angular/core';
import { User } from './models/User'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;

  constructor() {
    this.user = new User();
  }
  title = 'form-handling-part2';
}
