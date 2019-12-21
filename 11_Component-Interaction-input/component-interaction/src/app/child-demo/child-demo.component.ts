import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.css']
})
export class ChildDemoComponent implements OnInit {

  
  @Input() loggedIn:boolean;

  
  
  constructor() { }

  ngOnInit() {
  }

}
