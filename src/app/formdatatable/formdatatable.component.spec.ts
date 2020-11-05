import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdatatableComponent } from './formdatatable.component';

describe('FormdatatableComponent', () => {
  let component: FormdatatableComponent;
  let fixture: ComponentFixture<FormdatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormdatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
