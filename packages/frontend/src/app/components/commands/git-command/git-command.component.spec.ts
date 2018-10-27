import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCommandComponent } from './git-command.component';

describe('GitCommandComponent', () => {
  let component: GitCommandComponent;
  let fixture: ComponentFixture<GitCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
