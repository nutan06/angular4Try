import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksAvailableComponent } from './books-available.component';

describe('BooksAvailableComponent', () => {
  let component: BooksAvailableComponent;
  let fixture: ComponentFixture<BooksAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
