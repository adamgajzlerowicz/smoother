import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyCommandComponent } from './any-command.component';

describe('AnyCommandComponent', () => {
  let component: AnyCommandComponent;
  let fixture: ComponentFixture<AnyCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnyCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnyCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
