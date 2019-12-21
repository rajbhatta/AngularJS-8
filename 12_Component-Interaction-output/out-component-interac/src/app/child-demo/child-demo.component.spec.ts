import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDemoComponent } from './child-demo.component';

describe('ChildDemoComponent', () => {
  let component: ChildDemoComponent;
  let fixture: ComponentFixture<ChildDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
