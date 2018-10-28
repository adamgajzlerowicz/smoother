import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceCommandComponent } from './replace-command.component';

describe('ReplaceCommandComponent', () => {
  let component: ReplaceCommandComponent;
  let fixture: ComponentFixture<ReplaceCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplaceCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaceCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
