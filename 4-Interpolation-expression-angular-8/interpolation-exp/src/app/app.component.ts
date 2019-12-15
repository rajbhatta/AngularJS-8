import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
              <h3>Hello I'm using HTML tag inside component template</h3>
              <h5>This page was created in {{createdDate}}</h5>
              </div>`,
              styles: ['h3{ font-weight: normal; color:red; }h5{ font-weight: normal; color:green; }']
})
export class AppComponent {
  title = 'This is the tile properties for this page';
  createdDate='2019/12/15';

}
