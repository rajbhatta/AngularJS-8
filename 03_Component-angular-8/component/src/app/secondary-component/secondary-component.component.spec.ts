import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryComponentComponent } from './secondary-component.component';

describe('SecondaryComponentComponent', () => {
  let component: SecondaryComponentComponent;
  let fixture: ComponentFixture<SecondaryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
