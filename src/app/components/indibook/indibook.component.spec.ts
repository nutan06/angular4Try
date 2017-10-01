import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndibookComponent } from './indibook.component';

describe('IndibookComponent', () => {
  let component: IndibookComponent;
  let fixture: ComponentFixture<IndibookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndibookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndibookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
