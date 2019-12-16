import { Component, OnInit, EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.css']
})
export class ChildDemoComponent implements OnInit {

 @Output() greetEvent= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  callParentGreet()
  {
    this.greetEvent.emit();
  }

}
